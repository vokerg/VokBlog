package com.vokerg.blog.VokergBlog.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="likes")
@Data
@Builder
public class Like {
    @Id
    private String id;
    private String idAuthor;
    private String idArticle;
    private String idComment;
}
