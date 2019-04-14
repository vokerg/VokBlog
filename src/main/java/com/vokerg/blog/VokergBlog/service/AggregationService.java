package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.AggregatedAuthor;
import com.vokerg.blog.VokergBlog.model.Author;
import com.vokerg.blog.VokergBlog.repository.ArticleRepository;
import com.vokerg.blog.VokergBlog.repository.AuthorRepository;
import com.vokerg.blog.VokergBlog.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

@Service
public class AggregationService {
    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    CommentRepository commentRepository;

    public AggregatedAuthor getAggregatedAuthorData(String id) {

        Author author = authorRepository.findById(id).orElse(null);
        if (author == null) {
            return null;
        }

        Integer articlesCount = articleRepository.countByIdAuthor(id);
        Integer commentsCount = commentRepository.countByIdAuthor(id);

        AggregatedAuthor aggregatedAuthor = new AggregatedAuthor();
        aggregatedAuthor.setId(author.getId());
        aggregatedAuthor.setName(author.getName());
        aggregatedAuthor.setUsername(author.getUsername());
        aggregatedAuthor.setArticlesCount(articlesCount);
        aggregatedAuthor.setCommentsCount(commentsCount);

        return aggregatedAuthor;
    }
}
