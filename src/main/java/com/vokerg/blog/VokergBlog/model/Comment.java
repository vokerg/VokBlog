package com.vokerg.blog.VokergBlog.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="comments")
public class Comment {
    @Id
    private String id;
    private String idAuthor;
    private String idArticle;
    private String idParentComment;
    private String authorName;
    private String text;
    private String title;

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
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

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public String getIdParentComment() {
        return idParentComment;
    }

    public void setIdParentComment(String idParentComment) {
        this.idParentComment = idParentComment;
    }
}
