package com.vokerg.blog.VokergBlog.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="comments")
public class Comment {

    @Id
    private String id;
    private String idAuthor;
    private String idArticle;
    private String author;
    private String text;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIdAuthor() {
        return idAuthor;
    }

    public void setIdAuthor(String idAuthor) {
        this.idAuthor = idAuthor;
    }

    public String getIdArticle() {
        return idArticle;
    }

    public void setIdArticle(String idArticle) {
        this.idArticle = idArticle;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
