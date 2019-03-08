package com.vokerg.blog.VokergBlog;

public class AuthenticatedUserBuilder {
    private String userId;
    private String token;
    private String username;

    public AuthenticatedUserBuilder setUserId(String userId) {
        this.userId = userId;
        return this;
    }

    public AuthenticatedUserBuilder setToken(String token) {
        this.token = token;
        return this;
    }

    public AuthenticatedUserBuilder setUsername(String username) {
        this.username = username;
        return this;
    }

    public AuthenticatedUser createAuthenticatedUser() {
        return new AuthenticatedUser(userId, token, username);
    }
}