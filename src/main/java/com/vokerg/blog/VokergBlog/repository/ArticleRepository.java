package com.vokerg.blog.VokergBlog.repository;

import com.vokerg.blog.VokergBlog.model.Article;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ArticleRepository extends MongoRepository<Article, String> {
    List<Article> findAll();
    Optional<Article> findById(String id);
    Integer countByIdAuthor(String idAuthor);
}
