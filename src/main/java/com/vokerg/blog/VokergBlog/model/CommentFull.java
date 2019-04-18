package com.vokerg.blog.VokergBlog.model;

public class CommentFull extends Comment{
    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    private Article article;
    private Author author;
}
