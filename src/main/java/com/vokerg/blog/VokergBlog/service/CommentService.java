package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.Comment;
import com.vokerg.blog.VokergBlog.model.CommentFull;
import com.vokerg.blog.VokergBlog.repository.AuthorRepository;
import com.vokerg.blog.VokergBlog.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;
import static org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Eq.valueOf;

@Service
public class CommentService {

    public static final String[] COMMENT_FIELDS = {"idAuthor", "authorName", "idArticle", "text", "title", "idParentComment"};
    public static final String[] COMMENT_FIELDS1 = {"idAuthor", "authorName", "idArticle", "text", "title", "idParentComment", "subCommentCount", "article", "likeCount"};

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    AlertService alertService;

    private List<CommentFull> getLatestFullComments(Criteria criteria, Long queryLimit, Long querySkip) {

        String currentUserId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();

        ProjectionOperation projectPreProcessing = Aggregation.project(COMMENT_FIELDS)
                .and(ConvertOperators.valueOf("idArticle").convertToObjectId()).as("new_article_id")
                .and(ConvertOperators.valueOf("_id").convertToString()).as("newid");

        LookupOperation lookupOperationArticle = LookupOperation.newLookup()
                .from("articles")
                .localField("new_article_id")
                .foreignField("_id")
                .as("articles");

        LookupOperation lookupOperationLikes = LookupOperation.newLookup()
                .from("likes")
                .localField("newid")
                .foreignField("idComment")
                .as("likes");

        LookupOperation lookupOperationSubComments = LookupOperation.newLookup()
                .from("comments")
                .localField("newid")
                .foreignField("idParentComment")
                .as("subComments");

        ProjectionOperation projectLikesAndArticle = project(COMMENT_FIELDS)
                .and("subComments").size().as("subCommentCount")
                .and("articles").arrayElementAt(0).as("article")
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
                        projectPreProcessing,
                        lookupOperationSubComments,
                        lookupOperationArticle,
                        lookupOperationLikes,
                        projectLikesAndArticle,
                        project(COMMENT_FIELDS1).and("liked").size(),
                        project(COMMENT_FIELDS1).and("liked").gt(0)
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

    public List<CommentFull> getCommentByIdArticle(String idArticle) {
        return getLatestFullComments(
                new Criteria().andOperator(
                        Criteria.where("idArticle").is(idArticle),
                        new Criteria().orOperator(
                                Criteria.where("idParentComment").is(""),
                                Criteria.where("idParentComment").is(null)
                        )
                ), null, null
        );
    }

    public CommentFull getCommentById(String id) {
        List<CommentFull> comments = getLatestFullComments(Criteria.where("_id").is(id), null, null);
        return (comments.size() > 0) ? comments.get(0) : null;
    }

    public List<CommentFull> getCommentsByParentId(String idParentComment) {
        return getLatestFullComments(Criteria.where("_id").ne(null)
                .and("idParentComment").is(idParentComment), null, null);
    }

    public CommentFull createComment(Comment comment) {
        commentRepository.save(comment);
        CommentFull newComment =  getCommentById(comment.getId());
        alertService.createNewCommentAlert(newComment);
        return newComment;
    }
}
