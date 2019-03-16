package com.vokerg.blog.VokergBlog.controller;

import com.vokerg.blog.VokergBlog.model.Article;
import com.vokerg.blog.VokergBlog.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="api/authors")
public class AuthorsController {

    @Autowired
    ArticleRepository articleRepository;

    @GetMapping("/{idAuthor}/articles")
    public ResponseEntity<List<Article>> getAuthorsArticles(@RequestParam String idAuthor) {
        return ResponseEntity.ok(articleRepository.findByIdAuthor(idAuthor));
    }
}
