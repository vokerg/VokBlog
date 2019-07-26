package com.vokerg.blog.VokergBlog.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection="follows")
public class Follow {
    @Id
    String id;
    String idAuthorFollower;
    String idAuthorFollowed;
}
