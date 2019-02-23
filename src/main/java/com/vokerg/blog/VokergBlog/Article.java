package com.vokerg.blog.VokergBlog;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;

@Document(collection="articles")
public class Article {
    @Id
    public BigInteger documentId;
    public String title;
    public String subject;
    public String content;
    public Integer idAuthor;
    public String author;
    public String tags;
    public Boolean liked;

    public Article(BigInteger documentId) {
        this.documentId = documentId;
    }
}
