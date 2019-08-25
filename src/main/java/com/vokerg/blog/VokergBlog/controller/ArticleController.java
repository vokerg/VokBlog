package com.vokerg.blog.VokergBlog.controller;

import com.vokerg.blog.VokergBlog.model.*;
import com.vokerg.blog.VokergBlog.repository.ArticleRepository;
import com.vokerg.blog.VokergBlog.repository.CommentRepository;
import com.vokerg.blog.VokergBlog.service.ArticleService;
import com.vokerg.blog.VokergBlog.service.CommentService;
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

    @Autowired
    CommentService commentService;

    @GetMapping("")
    public ResponseEntity<List<ArticleFull>> getArticles(
            @RequestParam(required = false) String tag,
            @RequestParam(required = false) Boolean isFeed
    ) {
        if (tag != null) {
            return ResponseEntity.ok(articleService.getAggregatedArticlesForTag(tag));
        }
        if (isFeed != null && isFeed) {
            String userId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
            return ResponseEntity.ok(articleService.getAggregatedArticlesForUserFeed(userId));
        }
        return ResponseEntity.ok(articleService.getAggregatedArticles());
    }

    @PutMapping("")
    public ResponseEntity<Article> createArticle(@RequestBody Article article) {
        return ResponseEntity.ok(articleService.createArticle(article));
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
    public ResponseEntity<List<CommentFull>> getCommentsForArticle(@PathVariable String id) {
        return ResponseEntity.ok(commentService.getCommentByIdArticle(id));
    }

    @PutMapping("/{id}/comments")
    public ResponseEntity<CommentFull> commentArticle(@PathVariable String id,
                                                      @RequestBody Comment comment) {
        return ResponseEntity.ok(commentService.createComment(comment));
    }

    @GetMapping("/{id}/likes")
    public ResponseEntity<List<LikeFull>> getArticleLikes(@PathVariable String id) {
        return ResponseEntity.ok(likeService.getLikesForArticle(id));
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

    @PutMapping("/{id}/shares")
    public ResponseEntity<ArticleFull> shareArticle(@PathVariable String id) {
        String authorId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        return ResponseEntity.ok(articleService.shareArticle(id, authorId));
    }


}
