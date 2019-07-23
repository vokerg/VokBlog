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

    public Boolean getLiked() {
        return liked;
    }

    public void setLiked(Boolean liked) {
        this.liked = liked;
    }

    public Integer getLikeCount() {
        return likeCount;
    }

    public void setLikeCount(Integer likeCount) {
        this.likeCount = likeCount;
    }

    public Integer getSubCommentCount() {
        return subCommentCount;
    }

    public void setSubCommentCount(Integer subCommentCount) {
        this.subCommentCount = subCommentCount;
    }

    private Article article;
    private Author author;
    private Boolean liked;
    private Integer likeCount;
    private Integer subCommentCount;
}
