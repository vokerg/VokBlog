package com.vokerg.blog.VokergBlog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/articles")
public class ArticleController {

    @Autowired
    ArticleRepository articleRepository;

    @GetMapping("")
    public ResponseEntity<String> getSomeResponse() {
        articleRepository.findAll();
        return ResponseEntity.ok("ok");
    }
}
