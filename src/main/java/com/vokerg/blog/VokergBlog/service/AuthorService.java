package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.AggregatedAuthor;
import com.vokerg.blog.VokergBlog.model.Author;
import com.vokerg.blog.VokergBlog.repository.ArticleRepository;
import com.vokerg.blog.VokergBlog.repository.AuthorRepository;
import com.vokerg.blog.VokergBlog.repository.CommentRepository;
import com.vokerg.blog.VokergBlog.repository.FollowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthorService {

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    FollowRepository followRepository;

    public List<AggregatedAuthor> getAggregatedAuthors() {
        return authorRepository.findAll().stream().map(author -> mapAuthor(author)).collect(Collectors.toList());
    }

    private AggregatedAuthor mapAuthor(Author author) {
        Integer articlesCount = articleRepository.countByIdAuthor(author.getId());
        Integer commentsCount = commentRepository.countByIdAuthor(author.getId());
        Integer followersCount = followRepository.countByIdAuthorFollowed(author.getId());

        return AggregatedAuthor.builder()
                .id(author.getId())
                .name(author.getName())
                .username(author.getUsername())
                .articlesCount(articlesCount)
                .commentsCount(commentsCount)
                .followersCount(followersCount)
                .build();
    }

    public AggregatedAuthor getAggregatedAuthorData(String id) {
        Author author = authorRepository.findById(id).orElse(null);
        return (author == null) ? null : mapAuthor(author);
    }

    public Author getAuthorByUsername(String username) {
        return authorRepository.getByUsernameIgnoreCase(username);
    }
}
