package com.vokerg.blog.VokergBlog.model;

import lombok.Data;

@Data
public class CommentFull extends Comment{
    private Article article;
    private Author author;
    private Boolean liked;
    private Integer likeCount;
    private Integer subCommentCount;
}
