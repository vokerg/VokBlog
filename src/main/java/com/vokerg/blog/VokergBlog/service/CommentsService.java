package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.CommentFull;
import com.vokerg.blog.VokergBlog.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.match;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.project;

@Service
public class CommentsService {

    public static final String[] COMMENT_FIELDS = {"idAuthor", "idArticle", "text", "title"};
    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    MongoTemplate mongoTemplate;

    public List<CommentFull> getFullCommentsForAuthorId(String idAuthor) {
        LookupOperation lookupOperation = LookupOperation.newLookup()
                .from("articles")
                .localField("newid")
                .foreignField("_id")
                .as("articles");

        ProjectionOperation project = Aggregation.project(COMMENT_FIELDS)
                .and(ConvertOperators.valueOf("idArticle").convertToObjectId()).as("newid");

        Aggregation aggregation = Aggregation
                .newAggregation(
                        match(Criteria.where("_id").is(idAuthor)),
                        project,
                        lookupOperation,
                        project(COMMENT_FIELDS).and("articles").arrayElementAt(0).as("article")
                );
        AggregationResults<CommentFull> results = mongoTemplate.aggregate(aggregation, "comments", CommentFull.class);
        return results.getMappedResults();
    }
}
