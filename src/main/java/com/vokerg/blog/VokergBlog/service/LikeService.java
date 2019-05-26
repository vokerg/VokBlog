package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.Like;
import com.vokerg.blog.VokergBlog.repository.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeService {

    @Autowired
    LikeRepository likeRepository;

    public Like setLikeToArticle(String articleId, String authorId) {
        List<Like> likes = likeRepository.getByArticleIdAndAuthorId(articleId, authorId);
        if (likes.size() > 0) {
            return likes.get(0);
        }
        Like like = new Like();
        like.setArticleId(articleId);
        like.setAuthorId(authorId);
        likeRepository.save(like);
        return like;
    }

    public Like setLikeToComment(String commentId, String authorId) {
        List<Like> likes = likeRepository.getByCommentIdAndAuthorId(commentId, authorId);
        if (likes.size() > 0) {
            return likes.get(0);
        }
        Like like = new Like();
        like.setCommentId(commentId);
        like.setAuthorId(authorId);
        likeRepository.save(like);
        return like;
    }

    public void unlikeArticle(String articleId, String authorId) {
        likeRepository.deleteAllByArticleIdAndAuthorId(articleId, authorId);
    }

    public void unlikeComment(String commentId, String authorId) {
        likeRepository.deleteAllByCommentIdAndAuthorId(commentId, authorId);
    }
}
