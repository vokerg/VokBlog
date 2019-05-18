package com.vokerg.blog.VokergBlog.model;

public class ArticleFull extends Article{
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

    private Boolean liked;
    private Integer likeCount;
}
