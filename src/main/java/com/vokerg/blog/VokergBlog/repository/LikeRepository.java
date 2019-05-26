package com.vokerg.blog.VokergBlog.repository;

import com.vokerg.blog.VokergBlog.model.Like;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface LikeRepository extends MongoRepository<Like, String> {
    List<Like> getByArticleIdAndAuthorId(String articleId, String authorId);
    List<Like> getByCommentIdAndAuthorId(String commentId, String authorId);
    void deleteAllByArticleIdAndAuthorId(String articleId, String authorId);
    void deleteAllByCommentIdAndAuthorId(String articleId, String authorId);
}
