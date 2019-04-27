package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.Comment;
import com.vokerg.blog.VokergBlog.model.CommentFull;
import com.vokerg.blog.VokergBlog.repository.ArticleRepository;
import com.vokerg.blog.VokergBlog.repository.AuthorRepository;
import com.vokerg.blog.VokergBlog.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentsService {

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    ArticleRepository articleRepository;

    public List<CommentFull> mapToFull(List<Comment> comments) {
        return comments.stream().map(comment -> {
            CommentFull commentFull = new CommentFull();
            commentFull.setIdArticle(comment.getIdArticle());
            commentFull.setId(comment.getId());
            commentFull.setIdAuthor(comment.getIdAuthor());
            commentFull.setText(comment.getText());
            commentFull.setAuthorName(comment.getAuthorName());

            commentFull.setAuthor(authorRepository.findById(comment.getIdAuthor()).orElse(null));
            commentFull.setArticle(articleRepository.findById(comment.getIdArticle()).orElse(null));
            return commentFull;
        }).collect(Collectors.toList());
    }
}
