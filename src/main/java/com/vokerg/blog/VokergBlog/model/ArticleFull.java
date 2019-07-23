package com.vokerg.blog.VokergBlog.model;

import lombok.Data;

@Data
public class ArticleFull extends Article{
    private Boolean liked;
    private Integer likeCount;
}
