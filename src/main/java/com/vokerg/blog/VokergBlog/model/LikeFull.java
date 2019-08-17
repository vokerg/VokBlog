package com.vokerg.blog.VokergBlog.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LikeFull extends Like{
    String authorName;
    String articleTitle;
}
