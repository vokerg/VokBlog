package com.vokerg.blog.VokergBlog.repository;

import com.vokerg.blog.VokergBlog.model.Author;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface AuthorRepository extends MongoRepository<Author, String> {
    Author getByUsernameIgnoreCase(String username);
    Optional<Author> findById(String id);
}
