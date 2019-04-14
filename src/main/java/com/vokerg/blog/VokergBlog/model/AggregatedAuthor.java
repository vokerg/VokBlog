package com.vokerg.blog.VokergBlog.model;

public class AggregatedAuthor {
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getArticlesCount() {
        return articlesCount;
    }

    public void setArticlesCount(Integer articlesCount) {
        this.articlesCount = articlesCount;
    }

    public Integer getCommentsCount() {
        return commentsCount;
    }

    public void setCommentsCount(Integer commentsCount) {
        this.commentsCount = commentsCount;
    }

    private String id;
    private String username;
    private String name;
    private Integer articlesCount;
    private Integer commentsCount;
}
