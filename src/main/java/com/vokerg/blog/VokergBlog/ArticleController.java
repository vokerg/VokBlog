package com.vokerg.blog.VokergBlog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/api/articles")
public class ArticleController {

    @Autowired
    ArticleRepository articleRepository;

    @GetMapping("")
    public ResponseEntity<List<Article>> getSomeResponse() {
        return ResponseEntity.ok(articleRepository.findAll());
    }
}
