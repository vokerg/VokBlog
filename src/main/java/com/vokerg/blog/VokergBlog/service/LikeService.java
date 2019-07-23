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

    public Like setLikeToArticle(String idArticle, String idAuthor) {
        List<Like> likes = likeRepository.getByIdArticleAndIdAuthor(idArticle, idAuthor);
        if (likes.size() > 0) {
            return likes.get(0);
        }
        Like like = Like.builder()
                .idArticle(idArticle)
                .idAuthor(idAuthor)
                .build();
        likeRepository.save(like);
        return like;
    }

    public Like setLikeToComment(String idComment, String idAuthor) {
        List<Like> likes = likeRepository.getByIdCommentAndIdAuthor(idComment, idAuthor);
        if (likes.size() > 0) {
            return likes.get(0);
        }
        Like like = Like.builder()
                .idComment(idComment)
                .idAuthor(idAuthor)
                .build();
        likeRepository.save(like);
        return like;
    }

    public void unlikeArticle(String idArticle, String idAuthor) {
        likeRepository.deleteAllByIdArticleAndIdAuthor(idArticle, idAuthor);
    }

    public void unlikeComment(String idComment, String idAuthor) {
        likeRepository.deleteAllByIdCommentAndIdAuthor(idComment, idAuthor);
    }
}
