package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.CommentFull;
import com.vokerg.blog.VokergBlog.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;
import static org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Eq.valueOf;

@Service
public class CommentsService {

    public static final String[] COMMENT_FIELDS = {"idAuthor", "authorName", "idArticle", "text", "title"};
    public static final String[] COMMENT_FIELDS1 = {"idAuthor", "authorName", "idArticle", "text", "title", "article"};
    public static final String[] COMMENT_FIELDS2 = {"idAuthor", "authorName", "idArticle", "text", "title", "article", "likeCount"};
    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    MongoTemplate mongoTemplate;

    private List<CommentFull> getLatestFullComments(Criteria criteria, Long queryLimit, Long querySkip) {

        String currentUserId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();

        LookupOperation lookupOperationArticle = LookupOperation.newLookup()
                .from("articles")
                .localField("newid")
                .foreignField("_id")
                .as("articles");

        LookupOperation lookupOperationLikes = LookupOperation.newLookup()
                .from("like")
                .localField("newid")
                .foreignField("commentId")
                .as("likes");

        ProjectionOperation projectStringId = Aggregation.project(COMMENT_FIELDS)
                .and(ConvertOperators.valueOf("idArticle").convertToObjectId()).as("newid");
        ProjectionOperation projectArticle = Aggregation.project(COMMENT_FIELDS).and("articles").arrayElementAt(0).as("article");


        ProjectionOperation projectLikes = project(COMMENT_FIELDS1)
                .and("likes")
                .filter("item", valueOf("item.authorId").equalToValue(currentUserId))
                .as("liked")
                .and("likes").size().as("likeCount");

        Aggregation aggregation = Aggregation
                .newAggregation(
                        match(criteria),
                        sort(new Sort(Sort.Direction.DESC, "_id")),
                        limit(queryLimit != null ? queryLimit : Long.MAX_VALUE),
                        skip(querySkip != null ? querySkip : 0),
                        projectStringId,
                        lookupOperationArticle,
                        projectArticle,
                        lookupOperationLikes,
                        projectLikes,
                        project(COMMENT_FIELDS2).and("liked").size(),
                        project(COMMENT_FIELDS2).and("liked").gt(0)
                );

        AggregationResults<CommentFull> results = mongoTemplate.aggregate(aggregation, "comments", CommentFull.class);
        return results.getMappedResults();
    }

    public List<CommentFull> getFullCommentsForAuthorId(String idAuthor) {
        return getLatestFullComments(Criteria.where("idAuthor").is(idAuthor), null, null);
    }

    public List<CommentFull> getTopFullComments() {
        return getLatestFullComments(Criteria.where("_id").ne(null), Long.valueOf(10), null);
    }
}
