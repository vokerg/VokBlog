package com.vokerg.blog.VokergBlog.controller;

import com.vokerg.blog.VokergBlog.model.AggregatedAuthor;
import com.vokerg.blog.VokergBlog.model.Article;
import com.vokerg.blog.VokergBlog.model.Comment;
import com.vokerg.blog.VokergBlog.repository.AggregationService;
import com.vokerg.blog.VokergBlog.repository.ArticleRepository;
import com.vokerg.blog.VokergBlog.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="api/authors")
public class AuthorsController {

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    AggregationService aggregationService;

    @GetMapping("/{idAuthor}/articles")
    public ResponseEntity<List<Article>> getAuthorsArticles(@PathVariable String idAuthor) {
        return ResponseEntity.ok(articleRepository.findByIdAuthor(idAuthor));
    }

    @GetMapping("/{idAuthor}/comments")
    public ResponseEntity<List<Comment>> getAuthorsComments(@PathVariable String idAuthor) {
        return ResponseEntity.ok(commentRepository.findByIdAuthor(idAuthor));
    }

    @GetMapping("/{idAuthor}/aggregated")
    public ResponseEntity<AggregatedAuthor> getAuthorsAggregation(@PathVariable String idAuthor) {
        return ResponseEntity.ok(aggregationService.getAggregatedAuthorData(idAuthor));
    }
}
