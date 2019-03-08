package com.vokerg.blog.VokergBlog.controller;

import com.vokerg.blog.VokergBlog.model.AuthenticatedUser;
import com.vokerg.blog.VokergBlog.service.AuthorService;
import com.vokerg.blog.VokergBlog.model.Author;
import com.vokerg.blog.VokergBlog.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/api/users")
public class UsersController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    AuthorService authorService;

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<AuthenticatedUser> login(@RequestParam String username, @RequestParam String password) {
        AuthenticatedUser user = authenticationService.authenticatedUser(username, password);
        return (user != null) ? ResponseEntity.ok(user)
                : ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
    }

    @PutMapping("/signup")
    public ResponseEntity<AuthenticatedUser> signup(@RequestParam Author author) {
        if (authorService.getAuthorByUsername(author.getUsername()) != null) {
            return ResponseEntity.badRequest().body(null);
        }
        Author persistedAuthor = authorService.signupUser(author);
        AuthenticatedUser user = authenticationService
                .authenticatedUser(persistedAuthor.getUsername(), persistedAuthor.getPassword());
        return (user != null) ? ResponseEntity.ok(user) : ResponseEntity.badRequest().body(null);
    }
}
