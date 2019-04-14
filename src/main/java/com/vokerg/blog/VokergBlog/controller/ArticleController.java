package com.vokerg.blog.VokergBlog.controller;

import com.vokerg.blog.VokergBlog.model.Comment;
import com.vokerg.blog.VokergBlog.repository.ArticleRepository;
import com.vokerg.blog.VokergBlog.model.Article;
import com.vokerg.blog.VokergBlog.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/articles")
public class ArticleController {

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    CommentRepository commentRepository;

    @GetMapping("")
    public ResponseEntity<List<Article>> getSomeResponse(@RequestParam(required = false) String tag) {
        if (tag != null) {
            return ResponseEntity.ok(articleRepository.findByTagsContains(tag));
        }
        return ResponseEntity.ok(articleRepository.findAll());
    }

    @PutMapping("")
    public ResponseEntity<Article> createArticle(@RequestBody Article article) {
        articleRepository.save(article);
        return ResponseEntity.ok(article);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Article> getArticle(@PathVariable String id, @RequestParam(required = false) String tag) {
        return ResponseEntity.ok(articleRepository.findById(id).orElse(null));
    }

    @PostMapping("/{id}")
    public ResponseEntity<Article> updateArticle(@PathVariable String id, @RequestBody Article article) {
        if (article.getId().equals(id)) {
            articleRepository.save(article);
            return ResponseEntity.ok(article);
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/{id}/comments")
    public ResponseEntity<List<Comment>> getCommentsForArticle(@PathVariable String id) {
        return ResponseEntity.ok(commentRepository.findByIdArticle(id));
    }

    @PutMapping("/{id}/comments")
    public ResponseEntity<Comment> createCommentForArticle(@PathVariable String id,
                                                           @RequestBody Comment comment) {
        commentRepository.save(comment);
        return ResponseEntity.ok(comment);
    }

}
