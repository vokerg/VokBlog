package com.vokerg.blog.VokergBlog.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
@Builder
public class Alert {
    @Id
    private String id;
    private String idAuthorSource;
    private String idAuthorTarget;
    private String idComment;
    private String idArticle;
    private String text;
    private boolean seen;
}
