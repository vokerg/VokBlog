package com.vokerg.blog.VokergBlog.repository;

import com.vokerg.blog.VokergBlog.model.Alert;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AlertRepository extends MongoRepository<Alert, String> {
    List<Alert> findByIdAuthorTargetOrderByIdDesc(String idAuthorTarget);
}
