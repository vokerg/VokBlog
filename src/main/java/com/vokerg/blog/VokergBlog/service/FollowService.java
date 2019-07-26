package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.Follow;
import com.vokerg.blog.VokergBlog.repository.FollowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowService {
    @Autowired
    FollowRepository followRepository;

    public Follow followAuthor(String idAuthorFollowed, String idAuthorFollower) {
        if (idAuthorFollowed.equals(idAuthorFollower)) {
            return null;
        }
        List<Follow> follows = followRepository
                .findByIdAuthorFollowedAndIdAuthorFollower(idAuthorFollowed, idAuthorFollower);
        if (follows.size() > 0) {
            return follows.get(0);
        }
        Follow follow = Follow.builder()
                .idAuthorFollowed(idAuthorFollowed)
                .idAuthorFollower(idAuthorFollower)
                .build();
        followRepository.save(follow);
        return follow;
    }

    public void unfollowAuthor(String idAuthorFollowed, String idAuthorFollower) {
        followRepository.deleteAllByIdAuthorFollowedAndIdAuthorFollower(idAuthorFollowed, idAuthorFollower);
    }
}
