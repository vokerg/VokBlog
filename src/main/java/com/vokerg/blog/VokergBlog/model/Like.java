package com.vokerg.blog.VokergBlog.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="like")
@Data
public class Like {
    @Id
    private String id;
    private String authorId;
    private String articleId;
    private String commentId;
}
