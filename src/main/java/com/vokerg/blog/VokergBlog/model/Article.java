package com.vokerg.blog.VokergBlog.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection="articles")
@Data
public class Article {
    @Id
    private String id;
    private String title;
    private String subject;
    private String content;
    private String idAuthor;
    private String idSharedArticle;
    private String author;
    private List<String> tags;
}
