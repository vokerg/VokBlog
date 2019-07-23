package com.vokerg.blog.VokergBlog.repository;

import com.vokerg.blog.VokergBlog.model.Like;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface LikeRepository extends MongoRepository<Like, String> {
    List<Like> getByIdArticleAndIdAuthor(String idArticle, String idAuthor);
    List<Like> getByIdCommentAndIdAuthor(String idComment, String idAuthor);
    void deleteAllByIdArticleAndIdAuthor(String idArticle, String idAuthor);
    void deleteAllByIdCommentAndIdAuthor(String idArticle, String idAuthor);
}
