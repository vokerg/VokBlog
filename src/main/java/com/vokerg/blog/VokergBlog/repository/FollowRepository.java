package com.vokerg.blog.VokergBlog.repository;

import com.vokerg.blog.VokergBlog.model.Follow;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface FollowRepository extends MongoRepository<Follow, String> {
    List<Follow> findByIdAuthorFollowedAndIdAuthorFollower(String idAuthorFollowed, String idAuthorFollower);
    void deleteAllByIdAuthorFollowedAndIdAuthorFollower(String idAuthorFollowed, String idAuthorFollower);
}
