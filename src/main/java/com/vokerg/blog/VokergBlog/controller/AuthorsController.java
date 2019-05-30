package com.vokerg.blog.VokergBlog.controller;

import com.vokerg.blog.VokergBlog.model.AggregatedAuthor;
import com.vokerg.blog.VokergBlog.model.ArticleFull;
import com.vokerg.blog.VokergBlog.model.CommentFull;
import com.vokerg.blog.VokergBlog.service.AuthorService;
import com.vokerg.blog.VokergBlog.service.ArticleService;
import com.vokerg.blog.VokergBlog.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="api/authors")
public class AuthorsController {

    @Autowired
    ArticleService articleService;

    @Autowired
    AuthorService authorService;

    @Autowired
    CommentService commentService;

    @GetMapping("")
    public ResponseEntity<List<AggregatedAuthor>> getTopAuthors() {
        return ResponseEntity.ok(authorService.getAggregatedAuthors());
    }

    @GetMapping("/{idAuthor}/articles")
    public ResponseEntity<List<ArticleFull>> getAuthorsArticles(@PathVariable String idAuthor) {
        return ResponseEntity.ok(articleService.getAggregatedArticlesForAuthorId(idAuthor));
    }

    @GetMapping("/{idAuthor}/comments")
    public ResponseEntity<List<CommentFull>> getAuthorsComments(@PathVariable String idAuthor) {
        return ResponseEntity.ok(commentService.getFullCommentsForAuthorId(idAuthor));
    }

    @GetMapping("/{idAuthor}/aggregated")
    public ResponseEntity<AggregatedAuthor> getAuthorsAggregation(@PathVariable String idAuthor) {
        return ResponseEntity.ok(authorService.getAggregatedAuthorData(idAuthor));
    }
}