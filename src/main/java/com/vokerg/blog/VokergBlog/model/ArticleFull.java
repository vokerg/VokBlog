package com.vokerg.blog.VokergBlog.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ArticleFull extends Article{
    private Boolean liked;
    private Integer likeCount;
    private Integer commentsCount;
    private Article sharedArticle;
}
