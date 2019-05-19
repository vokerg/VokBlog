package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.Article;
import com.vokerg.blog.VokergBlog.model.ArticleFull;
import com.vokerg.blog.VokergBlog.model.CommentFull;
import com.vokerg.blog.VokergBlog.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;
import static org.springframework.data.mongodb.core.aggregation.ArrayOperators.Filter.filter;
import static org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Eq.valueOf;

@Service
public class ArticleService {
    public static final String[] ARTICLE_FIELDS = {"title", "subject", "content", "idAuthor", "author", "tags"};
    public static final String[] ARTICLE_FIELDS1 = {"title", "subject", "content", "idAuthor", "author", "tags", "likeCount"};
    @Autowired
    ArticleRepository articleRepository;




    @Autowired
    MongoTemplate mongoTemplate;

    public ArticleFull getAggregatedArticle(String id) {
        List<ArticleFull> list =  getAggregatedArticles(Criteria.where("_id").is(id));
        return (list.size() > 0) ? list.get(0) : null;
    }

    public List<ArticleFull> getAggregatedArticlesForTag(String tag) {
        return getAggregatedArticles(Criteria.where("tags").in(tag));
    }

    public List<ArticleFull> getAggregatedArticles() {
        return getAggregatedArticles(Criteria.where("_id").ne(null));
    }

    protected List<ArticleFull> getAggregatedArticles(Criteria criteria) {

        String currentUserId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();

        LookupOperation lookupOperation = LookupOperation.newLookup()
                .from("like")
                .localField("newid")
                .foreignField("articleId")
                .as("likes");

        Aggregation aggregation = Aggregation
                .newAggregation(
                        match(criteria),
                        sort(new Sort(Sort.Direction.DESC, "_id")),
                        project(ARTICLE_FIELDS).and(ConvertOperators.valueOf("_id").convertToString()).as("newid"),
                        lookupOperation,
                        project(ARTICLE_FIELDS)
                                .and("likes")
                                    .filter("item", valueOf("item.authorId").equalToValue(currentUserId))
                                    .as("likeByCurrentUser")
                                .and("likes")
                                    .size().as("likeCount")
                                ,
                        project(ARTICLE_FIELDS1)
                                .and("likeByCurrentUser").size().gt(0).as("liked")//.andExclude("likeByCurrentUser")
                );

        AggregationResults<ArticleFull> results = mongoTemplate.aggregate(aggregation, "articles", ArticleFull.class);
        return results.getMappedResults();

    }
}
