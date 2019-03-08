package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.Author;
import com.vokerg.blog.VokergBlog.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorService {

    @Autowired
    AuthorRepository authorRepository;

    public String authenticate(String username, String password) {
        //TODO: password handling
        Author author = authorRepository.getByUsernameAndPassword(username, password);
        return author != null ? author.getId() : null;
    }

    public Author getAuthorByUsername(String username) {
        return authorRepository.getByUsername(username);
    }


    public Author signupUser(Author author) {
        authorRepository.save(author);
        //TODO: password handling
        return author;
    }
}
