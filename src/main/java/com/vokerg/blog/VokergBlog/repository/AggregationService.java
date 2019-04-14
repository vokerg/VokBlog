package com.vokerg.blog.VokergBlog.repository;

import com.vokerg.blog.VokergBlog.model.AggregatedAuthor;
import com.vokerg.blog.VokergBlog.model.Article;
import com.vokerg.blog.VokergBlog.model.Author;
import com.vokerg.blog.VokergBlog.model.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AggregationService {
    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    AuthorRepository authorRepository;

    public AggregatedAuthor getAggregatedAuthorData(String id) {

        Author author = authorRepository.findById(id).orElse(null);
        if (author == null) {
            return null;
        }

        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.match(Criteria.where("idAuthor").is(id)),
                Aggregation.group("id").count().as("total")
        );

        List<AggregatedResult> aggregatedResult = mongoTemplate.aggregate(aggregation, Article.class, AggregatedResult.class).getMappedResults();
        Integer articlesCount = aggregatedResult.size() > 0 ? aggregatedResult.get(0).getTotal() : 0;

        aggregatedResult = mongoTemplate.aggregate(aggregation, Comment.class, AggregatedResult.class).getMappedResults();
        Integer commentsCount = aggregatedResult.size() > 0 ? aggregatedResult.get(0).getTotal() : 0;

        AggregatedAuthor aggregatedAuthor = new AggregatedAuthor();
        aggregatedAuthor.setId(author.getId());
        aggregatedAuthor.setName(author.getName());
        aggregatedAuthor.setUsername(author.getUsername());
        aggregatedAuthor.setArticlesCount(articlesCount);
        aggregatedAuthor.setCommentsCount(commentsCount);

        return aggregatedAuthor;
    }

    private static class AggregatedResult {
        public int getTotal() {
            return total;
        }
        public void setTotal(int total) {
            this.total = total;
        }
        private int total;

    }
}
