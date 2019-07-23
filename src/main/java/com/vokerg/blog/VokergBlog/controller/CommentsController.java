package com.vokerg.blog.VokergBlog.controller;

import com.vokerg.blog.VokergBlog.model.CommentFull;
import com.vokerg.blog.VokergBlog.service.CommentService;
import com.vokerg.blog.VokergBlog.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="api/comments")
public class CommentsController {
    @Autowired
    CommentService commentService;

    @Autowired
    LikeService likeService;

    @GetMapping("")
    public ResponseEntity<List<CommentFull>> getComments(@RequestParam(required = false) String idParentComment) {
        return (idParentComment == null)
                ? ResponseEntity.ok(commentService.getTopFullComments())
                : ResponseEntity.ok(commentService.getCommentsByParentId(idParentComment));
    }

    @PutMapping("/{id}/like")
    public ResponseEntity likeArticle(@PathVariable String id) {
        String userId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        likeService.setLikeToComment(id, userId);
        return ResponseEntity.ok(null);
    }

    @DeleteMapping("/{id}/like")
    public ResponseEntity unLikeArticle(@PathVariable String id) {
        String userId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        likeService.unlikeComment(id, userId);
        return ResponseEntity.ok(null);
    }

}
