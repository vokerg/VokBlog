package com.vokerg.blog.VokergBlog.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;

@Document(collection="articles")
public class Article {
    @Id
    public String id;
    public String title;
    public String subject;
    public String content;
    public Integer idAuthor;
    public String author;
    public String tags;
    public Boolean liked;

    public Article(String id) {
        this.id = id;
    }
}
