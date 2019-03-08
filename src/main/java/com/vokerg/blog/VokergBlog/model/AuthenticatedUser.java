package com.vokerg.blog.VokergBlog.model;

public class AuthenticatedUser {
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public AuthenticatedUser(String userId, String token, String username) {
        this.userId = userId;
        this.token = token;
        this.username = username;
    }

    private String userId;
    private String token;
    private String username;
}
