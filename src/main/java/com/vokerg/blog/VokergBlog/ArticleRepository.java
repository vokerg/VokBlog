package com.vokerg.blog.VokergBlog;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ArticleRepository extends MongoRepository<Article, String> {
    public List<Article> findAll();
}
