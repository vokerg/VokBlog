package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.Like;
import com.vokerg.blog.VokergBlog.model.LikeFull;
import com.vokerg.blog.VokergBlog.repository.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;

import java.util.List;

@Service
public class LikeService {

    public static final String[] LIKE_FIELDS = {"idAuthor", "idArticle"};


    @Autowired
    LikeRepository likeRepository;

    @Autowired
    MongoTemplate mongoTemplate;

    public Like setLikeToArticle(String idArticle, String idAuthor) {
        List<Like> likes = likeRepository.getByIdArticleAndIdAuthor(idArticle, idAuthor);
        if (likes.size() > 0) {
            return likes.get(0);
        }
        Like like = Like.builder()
                .idArticle(idArticle)
                .idAuthor(idAuthor)
                .build();
        likeRepository.save(like);
        return like;
    }

    public Like setLikeToComment(String idComment, String idAuthor) {
        List<Like> likes = likeRepository.getByIdCommentAndIdAuthor(idComment, idAuthor);
        if (likes.size() > 0) {
            return likes.get(0);
        }
        Like like = Like.builder()
                .idComment(idComment)
                .idAuthor(idAuthor)
                .build();
        likeRepository.save(like);
        return like;
    }

    public void unlikeArticle(String idArticle, String idAuthor) {
        likeRepository.deleteAllByIdArticleAndIdAuthor(idArticle, idAuthor);
    }

    public void unlikeComment(String idComment, String idAuthor) {
        likeRepository.deleteAllByIdCommentAndIdAuthor(idComment, idAuthor);
    }

    public List<LikeFull> getLikesForCriteria(Criteria criteria) {

        LookupOperation lookupOperationArticle = LookupOperation.newLookup()
                .from("articles")
                .localField("new_id_article")
                .foreignField("_id")
                .as("articles");

        LookupOperation lookupOperationAuthor = LookupOperation.newLookup()
                .from("authors")
                .localField("new_id_author")
                .foreignField("_id")
                .as("authors");

        ProjectionOperation projectArticleIdAndAuthorId = project(LIKE_FIELDS)
                .and(ConvertOperators.valueOf("idArticle").convertToObjectId()).as("new_id_article")
                .and(ConvertOperators.valueOf("idAuthor").convertToObjectId()).as("new_id_author");

        ProjectionOperation projectArticleAndAuthor = project(LIKE_FIELDS)
                .and("articles").arrayElementAt(0).as("article")
                .and("authors").arrayElementAt(0).as("author");

        ProjectionOperation projectArticleTitleAndAuthorName = project(LIKE_FIELDS)
                .and("article.title").as("articleTitle")
                .and("author.name").as("authorName");

        Aggregation aggregation = Aggregation.newAggregation(
                match(criteria),
                projectArticleIdAndAuthorId,
                lookupOperationArticle,
                lookupOperationAuthor,
                projectArticleAndAuthor,
                projectArticleTitleAndAuthorName
        );

        AggregationResults<LikeFull> results = mongoTemplate.aggregate(aggregation, "likes", LikeFull.class);

        return results.getMappedResults();
    }

    public List<LikeFull> getLikesForArticle(String idArticle) {
        return getLikesForCriteria(Criteria.where("idArticle").is(idArticle));
    }

    public List<LikeFull> getLikesForComment(String idComment) {
        return getLikesForCriteria(Criteria.where("idComment").is(idComment));
    }
}
