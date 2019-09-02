package com.vokerg.blog.VokergBlog.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="alerts")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Alert {
    @Id
    private String id;
    private String idAuthorSource;
    private String idAuthorTarget;
    private String idComment;
    private String idArticle;
    private String authorName;
    private String text;
    private boolean seen;
}
