package com.vokerg.blog.VokergBlog.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "authors")
@Data
public class Author {
    @Id
    private String id;
    private String username;
    private String password;
    private String name;
}
