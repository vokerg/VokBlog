package com.vokerg.blog.VokergBlog.repository;

import com.vokerg.blog.VokergBlog.model.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CommentRepository extends MongoRepository<Comment, String> {
    List<Comment> findAll();
    List<Comment> findByIdArticle(String idArticle);
    List<Comment> findByIdAuthor(String idAuthor);
    Integer countByIdAuthor(String idAuthor);
}
