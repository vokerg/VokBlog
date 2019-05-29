package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.AuthenticatedUser;
import com.vokerg.blog.VokergBlog.model.Author;
import com.vokerg.blog.VokergBlog.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    AuthorService authorService;

    public AuthenticatedUser authenticatedUser(String username, String password) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(username, password));
        return (authentication.isAuthenticated()) ?  (AuthenticatedUser) authentication.getPrincipal() : null;
    }

    public Author signupUser(Author author) {
        author.setPassword(bCryptPasswordEncoder.encode(author.getPassword()));
        authorRepository.save(author);
        return author;
    }

    public Author authenticate(String username, String password) {
        Author author = authorService.getAuthorByUsername(username);

        if (author != null) {
            if (!bCryptPasswordEncoder.matches(password, author.getPassword())) {
                author = null;
            }
        }
        return author;
    }
}
