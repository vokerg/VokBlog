package com.vokerg.blog.VokergBlog.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="comments")
@Data
public class Comment {
    @Id
    private String id;
    private String idAuthor;
    private String idArticle;
    private String idParentComment;
    private String authorName;
    private String text;
    private String title;
}
