package com.vokerg.blog.VokergBlog.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AggregatedAuthor {
    private String id;
    private String username;
    private String name;
    private Integer articlesCount;
    private Integer commentsCount;
}
