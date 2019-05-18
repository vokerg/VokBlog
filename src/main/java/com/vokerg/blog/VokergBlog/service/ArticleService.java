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

    public List<ArticleFull> getAggregatedArticles(String currentUserId) {
        LookupOperation lookupOperation = LookupOperation.newLookup()
                .from("like")
                .localField("newid")
                .foreignField("articleId")
                .as("likes");

        Aggregation aggregation = Aggregation
                .newAggregation(
                        match(Criteria.where("_id").ne(null)),
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
                        project(ARTICLE_FIELDS1).and("likeByCurrentUser").size().gte(0).as("liked")//.andExclude("likeByCurrentUser")
                );

        AggregationResults<ArticleFull> results = mongoTemplate.aggregate(aggregation, "articles", ArticleFull.class);
        return results.getMappedResults();

    }
}
