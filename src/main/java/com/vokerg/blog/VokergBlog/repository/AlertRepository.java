package com.vokerg.blog.VokergBlog.repository;

import com.vokerg.blog.VokergBlog.model.Alert;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AlertRepository extends MongoRepository<Alert, String> {
}
