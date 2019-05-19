package com.vokerg.blog.VokergBlog.controller;

import com.vokerg.blog.VokergBlog.model.ArticleFull;
import com.vokerg.blog.VokergBlog.model.Comment;
import com.vokerg.blog.VokergBlog.repository.ArticleRepository;
import com.vokerg.blog.VokergBlog.model.Article;
import com.vokerg.blog.VokergBlog.repository.CommentRepository;
import com.vokerg.blog.VokergBlog.service.ArticleService;
import com.vokerg.blog.VokergBlog.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/articles")
public class ArticleController {

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    LikeService likeService;

    @Autowired
    ArticleService articleService;

    @GetMapping("")
    public ResponseEntity<List<ArticleFull>> getSomeResponse(@RequestParam(required = false) String tag) {
        if (tag != null) {
            return ResponseEntity.ok(articleService.getAggregatedArticlesForTag(tag));
        }
        return ResponseEntity.ok(articleService.getAggregatedArticles());
    }

    @PutMapping("")
    public ResponseEntity<Article> createArticle(@RequestBody Article article) {
        articleRepository.save(article);
        return ResponseEntity.ok(article);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArticleFull> getArticle(@PathVariable String id) {
        return ResponseEntity.ok(articleService.getAggregatedArticle(id));
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

    @PutMapping("/{id}/like")
    public ResponseEntity likeArticle(@PathVariable String id) {
        String userId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        likeService.setLikeToArticle(id, userId);
        return ResponseEntity.ok(null);
    }

    @DeleteMapping("/{id}/like")
    public ResponseEntity unLikeArticle(@PathVariable String id) {
        String userId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        likeService.unlikeArticle(id, userId);
        return ResponseEntity.ok(null);
    }

}
