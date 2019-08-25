package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.Alert;
import com.vokerg.blog.VokergBlog.model.AlertType;
import com.vokerg.blog.VokergBlog.model.Article;
import com.vokerg.blog.VokergBlog.model.Author;
import com.vokerg.blog.VokergBlog.repository.AlertRepository;
import com.vokerg.blog.VokergBlog.repository.ArticleRepository;
import com.vokerg.blog.VokergBlog.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlertService {

    @Autowired
    AlertRepository alertRepository;

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    AuthorRepository authorRepository;

    private void createArticleAlert(String idAuthor, String idArticle, AlertType alertType) {
        Article article = articleRepository.findById(idArticle).orElse(null);
        Author author = authorRepository.findById(idAuthor).orElse(null);

        String text = "";
        switch(alertType) {
            case LIKED: text = "User " + author.getName() + " liked your article " + article.getTitle();
            case SHARED: text = "User " + author.getName() + " shared your article " + article.getTitle();
        }

        Alert alert = Alert.builder()
                .idArticle(idArticle)
                .idAuthorSource(idAuthor)
                .idAuthorTarget(article != null ? article.getIdAuthor() : null)
                .idArticle(idArticle)
                .text(text)
                .build();
        alertRepository.save(alert);
    }

    public void createSharedArticleAlert(String idAuthor, String idArticle) {
        createArticleAlert(idAuthor, idArticle, AlertType.SHARED);
    }

    public void likeArticle(String idArticle, String idAuthor) {
        createArticleAlert(idAuthor, idArticle, AlertType.LIKED);
    }
}
