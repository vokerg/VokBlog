package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.ArticleFull;
import com.vokerg.blog.VokergBlog.repository.ArticleRepository;
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
    public static final String[] ARTICLE_FIELDS1 = {"title", "subject", "content", "idAuthor", "idSharedArticle", "author", "tags", "likeCount", "commentsCount"};
    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    FollowRepository followRepository;

    public ArticleFull getAggregatedArticle(String id) {
        List<ArticleFull> list =  getAggregatedArticles(Criteria.where("_id").is(id));
        return (list.size() > 0) ? list.get(0) : null;
    }

    public List<ArticleFull> getAggregatedArticlesForTag(String tag) {
        return getAggregatedArticles(Criteria.where("tags").in(tag));
    }

    public List<ArticleFull> getAggregatedArticlesForAuthorId(String idAuthor) {
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

        LookupOperation lookupOperationComments = LookupOperation.newLookup()
                .from("comments")
                .localField("newid")
                .foreignField("idArticle")
                .as("comments");

        ProjectionOperation projectLikesAndComments = project(ARTICLE_FIELDS)
                .and("likes")
                .filter("item", valueOf("item.authorId").equalToValue(currentUserId))
                .as("liked")
                .and("likes").size().as("likeCount")
                .and("comments").size().as("commentsCount");

        ProjectionOperation projectStringId = project(ARTICLE_FIELDS)
                .and(ConvertOperators.valueOf("_id").convertToString()).as("newid");
        Aggregation aggregation = Aggregation
                .newAggregation(
                        match(criteria),
                        sort(new Sort(Sort.Direction.DESC, "_id")),
                        projectStringId,
                        lookupOperationLikes,
                        lookupOperationComments,
                        projectLikesAndComments,
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
}
