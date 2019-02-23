package com.vokerg.blog.VokergBlog;

import org.springframework.data.annotation.Id;

public class Article {
    @Id
    public String id;

    public String subject;
    public String title;
    public String content;
    public int idAuthor;
    public String author;
    public String tags;
    public boolean liked;

    public Article(String id, String subject, String title, String content, int idAuthor, String author, String tags, boolean liked) {
        this.id = id;
        this.subject = subject;
        this.title = title;
        this.content = content;
        this.idAuthor = idAuthor;
        this.author = author;
        this.tags = tags;
        this.liked = liked;
    }


}
