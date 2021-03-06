package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.*;
import com.vokerg.blog.VokergBlog.repository.AlertRepository;
import com.vokerg.blog.VokergBlog.repository.ArticleRepository;
import com.vokerg.blog.VokergBlog.repository.AuthorRepository;
import com.vokerg.blog.VokergBlog.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlertService {

    @Autowired
    AlertRepository alertRepository;

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    CommentRepository commentRepository;

    private void createArticleAlert(String idAuthor, String idArticle, AlertType alertType) {
        Article article = articleRepository.findById(idArticle).orElse(null);
        Author author = authorRepository.findById(idAuthor).orElse(null);

        String text = "";
        switch(alertType) {
            case LIKED: text = "liked your article " + article.getTitle(); break;
            case SHARED: text = "shared your article " + article.getTitle(); break;
            case COMMENTED: text = "commented your article " + article.getTitle(); break;
        }

        Alert alert = Alert.builder()
                .idAuthorSource(idAuthor)
                .idAuthorTarget(article != null ? article.getIdAuthor() : null)
                .idArticle(idArticle)
                .text(text)
                .authorName(author.getName())
                .build();
        alertRepository.save(alert);
    }

    private void createCommentAlert(String idComment, String idAuthor, AlertType alertType) {
        Comment comment = commentRepository.findById(idComment).orElse(null);
        Author author = authorRepository.findById(idAuthor).orElse(null);

        String text = "";
        switch(alertType) {
            case LIKED: text = "liked your comment " + getContentPreview(comment.getText()); break;
            case REPLIED: text = "replied on your comment " + getContentPreview(comment.getText()); break;
        }

        Alert alert = Alert.builder()
                .idAuthorSource(idAuthor)
                .idArticle(comment.getIdArticle())
                .idAuthorTarget(comment != null ? comment.getIdAuthor() : null)
                .idComment(idComment)
                .text(text)
                .authorName(author.getName())
                .build();
        alertRepository.save(alert);
    }

    private String getContentPreview(String text) {
        return text.length() > 20 ? text.substring(0, 20) : text;
    }

    public void createSharedArticleAlert(String idAuthor, String idArticle) {
        createArticleAlert(idAuthor, idArticle, AlertType.SHARED);
    }

    public void likeArticle(String idArticle, String idAuthor) {
        createArticleAlert(idAuthor, idArticle, AlertType.LIKED);
    }

    public void likeComment(String idComment, String idAuthor) {
        createCommentAlert(idComment, idAuthor, AlertType.LIKED);
    }

    public void createNewCommentAlert(Comment newComment) {
        createArticleAlert(newComment.getIdAuthor(), newComment.getIdArticle(), AlertType.COMMENTED);
        if (newComment.getIdParentComment() != null) {
            createCommentAlert(newComment.getIdParentComment(), newComment.getIdAuthor(), AlertType.REPLIED);
        }
    }

    public AlertEnvelope getAlertsForIdAuthor(String idAuthor, boolean forNotification) {
        List<Alert> alertList;
        if (forNotification) {
            alertList = alertRepository.findByIdAuthorTargetAndNotifiedIsFalse(idAuthor);
            if (alertList.size() > 0) {
                alertList.forEach(alert -> {
                    alert.setNotified(true);
                    alertRepository.save(alert);
                });
            }
        } else {
            alertList = alertRepository.findByIdAuthorTargetOrderByIdDesc(idAuthor);
        }

        return AlertEnvelope.builder()
                .alertList(alertList)
                .unseenCount(alertRepository.countByIdAuthorTargetAndSeenIsFalse(idAuthor))
                .build();
    }

    public void readAlert(Alert alert) {
        alert.setSeen(true);
        alertRepository.save(alert);
    }
}
