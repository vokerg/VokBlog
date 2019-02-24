package com.vokerg.blog.VokergBlog.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;

@Document(collection="comments")
public class Comment {
    @Id
    public BigInteger id;
    public String idAuthor;
    public String idArticle;
    public String author;
    public String comment;
    public Comment(BigInteger id) {
        this.id = id;
    }
}
