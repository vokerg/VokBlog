package com.vokerg.blog.VokergBlog.repository;

import com.vokerg.blog.VokergBlog.model.Author;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AuthorRepository extends MongoRepository<Author, String> {
    Author getByUsername(String username);
    Author getByUsernameAndPassword(String username, String password);
}
