package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.Author;
import com.vokerg.blog.VokergBlog.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthorService {

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    public Author authenticate(String username, String password) {
        Author author = getAuthorByUsername(username);

        if (author != null) {
            if (!bCryptPasswordEncoder.matches(password, author.getPassword())) {
                author = null;
            }
        }
        return author;
    }

    public Author getAuthorByUsername(String username) {
        return authorRepository.getByUsernameIgnoreCase(username);
    }

    public Author signupUser(Author author) {
        author.setPassword(bCryptPasswordEncoder.encode(author.getPassword()));
        authorRepository.save(author);
        return author;
    }
}
