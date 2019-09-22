package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.Article;
import com.vokerg.blog.VokergBlog.model.ArticleFull;
import com.vokerg.blog.VokergBlog.model.Author;
import com.vokerg.blog.VokergBlog.repository.ArticleRepository;
import com.vokerg.blog.VokergBlog.repository.AuthorRepository;
import com.vokerg.blog.VokergBlog.repository.FollowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;
import static org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Eq.valueOf;

@Service
public class ArticleService {
    public static final String[] ARTICLE_FIELDS = {"title", "subject", "content", "idAuthor", "idSharedArticle", "author", "tags"};
    public static final String[] ARTICLE_FIELDS1 = {"title", "subject", "content", "idAuthor", "idSharedArticle", "author", "tags", "likeCount", "commentsCount", "sharedCount", "sharedArticle"};

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    FollowRepository followRepository;

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    AlertService alertService;

    public ArticleFull getAggregatedArticle(String id) {
        List<ArticleFull> list =  getAggregatedArticles(Criteria.where("_id").is(id));
        return (list.size() > 0) ? list.get(0) : null;
    }

    public List<ArticleFull> getAggregatedArticlesForTag(String tag) {
        return getAggregatedArticles(Criteria.where("tags").in(tag));
    }

    public List<ArticleFull> getAggregatedArticlesForIdAuthor(String idAuthor) {
        return getAggregatedArticles(Criteria.where("idAuthor").is(idAuthor));
    }

    public List<ArticleFull> getAggregatedArticles() {
        return getAggregatedArticles(Criteria.where("_id").ne(null));
    }

    protected List<ArticleFull> getAggregatedArticles(Criteria criteria) {

        String currentUserId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();

        LookupOperation lookupOperationLikes = LookupOperation.newLookup()
                .from("likes")
                .localField("newid")
                .foreignField("idArticle")
                .as("likes");

        LookupOperation lookupOperationParentArticle = LookupOperation.newLookup()
                .from("articles")
                .localField("new_id_shared_article")
                .foreignField("_id")
                .as("sharedArticle");

        LookupOperation lookupOperationComments = LookupOperation.newLookup()
                .from("comments")
                .localField("newid")
                .foreignField("idArticle")
                .as("comments");

        LookupOperation lookupOperationSharedCount = LookupOperation.newLookup()
                .from("articles")
                .localField("newid")
                .foreignField("idSharedArticle")
                .as("shares");

        ProjectionOperation projectLikesAndComments = project(ARTICLE_FIELDS)
                .and("likes")
                .filter("item", valueOf("item.idAuthor").equalToValue(currentUserId))
                .as("liked")
                .and("likes").size().as("likeCount")
                .and("comments").size().as("commentsCount")
                .and("shares").size().as("sharedCount")
                .and(ConvertOperators.valueOf("idSharedArticle").convertToObjectId()).as("new_id_shared_article");

        ProjectionOperation projectStringId = project(ARTICLE_FIELDS)
                .and(ConvertOperators.valueOf("_id").convertToString()).as("newid");
        Aggregation aggregation = Aggregation
                .newAggregation(
                        match(criteria),
                        sort(new Sort(Sort.Direction.DESC, "_id")),
                        projectStringId,
                        lookupOperationLikes,
                        lookupOperationComments,
                        lookupOperationSharedCount,
                        projectLikesAndComments,
                        lookupOperationParentArticle,
                        project(ARTICLE_FIELDS1).and("liked").size(),
                        project(ARTICLE_FIELDS1).and("liked").gt(0)
                );

        AggregationResults<ArticleFull> results = mongoTemplate.aggregate(aggregation, "articles", ArticleFull.class);
        return results.getMappedResults();
    }

    public List<ArticleFull> getAggregatedArticlesForUserFeed(String userId) {
        List<String> followedAuthors = followRepository
                .findByIdAuthorFollower(userId).stream()
                .map(follow -> follow.getIdAuthorFollowed())
                .collect(Collectors.toList());
        return getAggregatedArticles(Criteria.where("idAuthor").in(followedAuthors));
    }

    public ArticleFull shareArticle(String idArticle, String idAuthor) {
        Article newArticle = articleRepository.save(Article.builder()
                .idAuthor(idAuthor)
                .author(authorRepository.findById(idAuthor).orElse(new Author()).getUsername())
                .idSharedArticle(idArticle)
                .build()
        );
        alertService.createSharedArticleAlert(idAuthor, idArticle);
        return getAggregatedArticle(newArticle.getId());
    }

    public Article createArticle(Article article) {
        articleRepository.save(article);
        return article;
    }
}
