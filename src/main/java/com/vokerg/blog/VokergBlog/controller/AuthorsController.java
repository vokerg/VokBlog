package com.vokerg.blog.VokergBlog.controller;

import com.vokerg.blog.VokergBlog.model.*;
import com.vokerg.blog.VokergBlog.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
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

    @Autowired
    FollowService followService;

    @GetMapping("")
    public ResponseEntity<List<AggregatedAuthor>> getTopAuthors() {
        return ResponseEntity.ok(authorService.getAggregatedAuthors());
    }

    @GetMapping("/{idAuthor}/articles")
    public ResponseEntity<List<ArticleFull>> getAuthorsArticles(@PathVariable String idAuthor) {
        return ResponseEntity.ok(articleService.getAggregatedArticlesForIdAuthor(idAuthor));
    }

    @GetMapping("/{idAuthor}/comments")
    public ResponseEntity<List<CommentFull>> getAuthorsComments(@PathVariable String idAuthor) {
        return ResponseEntity.ok(commentService.getFullCommentsForIdAuthor(idAuthor));
    }

    @GetMapping("/{idAuthor}/aggregated")
    public ResponseEntity<AggregatedAuthor> getAuthorsAggregation(@PathVariable String idAuthor) {
        return ResponseEntity.ok(authorService.getAggregatedAuthorData(idAuthor));
    }

    @PutMapping("/{idAuthor}/follows/{idAuthorFollowed}")
    public ResponseEntity<Follow> followAuthor(@PathVariable String idAuthor, @PathVariable String idAuthorFollowed) {
        String userId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        if ((userId != null) && userId.equals(idAuthor)) {
            return ResponseEntity.ok(followService.followAuthor(idAuthorFollowed, idAuthor));
        }
        return ResponseEntity.badRequest().body(null);
    }

    @DeleteMapping("/{idAuthor}/follows/{idAuthorFollowed}")
    public ResponseEntity unfollowAuthor(@PathVariable String idAuthor, @PathVariable String idAuthorFollowed) {
        String userId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        if ((userId != null) && userId.equals(idAuthor)) {
            followService.unfollowAuthor(idAuthorFollowed, idAuthor);
            return ResponseEntity.ok(null);
        }
        return ResponseEntity.badRequest().body(null);
    }
}