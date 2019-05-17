package com.vokerg.blog.VokergBlog.controller;

import com.vokerg.blog.VokergBlog.model.CommentFull;
import com.vokerg.blog.VokergBlog.service.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="api/comments")
public class CommentsController {
    @Autowired
    CommentsService commentsService;

    @GetMapping("")
    public ResponseEntity<List<CommentFull>> getTopComments() {
        return ResponseEntity.ok(commentsService.getTopFullComments());
    }

}
