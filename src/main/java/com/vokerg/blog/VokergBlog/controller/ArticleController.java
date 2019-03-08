package com.vokerg.blog.VokergBlog.controller;

import com.vokerg.blog.VokergBlog.AuthenticatedUser;
import com.vokerg.blog.VokergBlog.JwtUserService;
import com.vokerg.blog.VokergBlog.model.Comment;
import com.vokerg.blog.VokergBlog.repository.ArticleRepository;
import com.vokerg.blog.VokergBlog.model.Article;
import com.vokerg.blog.VokergBlog.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.List;

@RestController
@RequestMapping(value = "/api/articles")
public class ArticleController {

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    JwtUserService jwtUserService;

    @Autowired
    AuthenticationManager authenticationManager;

    @GetMapping("")
    public ResponseEntity<List<Article>> getSomeResponse() {
        return ResponseEntity.ok(articleRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Article> getArticle(@PathVariable(required = true) String id) {
        return ResponseEntity.ok(articleRepository.findById(id).orElse(null));
    }

    @GetMapping("/{id}/comments")
    public ResponseEntity<List<Comment>> getCommentsForArticle(@PathVariable(required = true) String id) {
        return ResponseEntity.ok(commentRepository.findByIdArticle(id));
    }

    @PutMapping("/{id}/comments")
    public ResponseEntity<Comment> createCommentForArticle(@PathVariable(required = true) String id,
                                                           @RequestBody Comment comment) {
        commentRepository.save(comment);
        return ResponseEntity.ok(comment);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticatedUser> login(@RequestParam String username, @RequestParam String password) {
        Authentication authentication = authenticationManager
                        .authenticate(new UsernamePasswordAuthenticationToken(username, password));
        if (!authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
        }

        AuthenticatedUser user = (AuthenticatedUser) authentication.getPrincipal();
        return ResponseEntity.ok(user);
    }
}
