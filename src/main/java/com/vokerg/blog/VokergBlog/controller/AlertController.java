package com.vokerg.blog.VokergBlog.controller;

import com.vokerg.blog.VokergBlog.model.Alert;
import com.vokerg.blog.VokergBlog.service.AlertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/api/users")
public class AlertController {
    @Autowired
    AlertService alertService;

    @GetMapping("/alerts")
    public ResponseEntity<List<Alert>> getAlerts() {
        String userId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        return ResponseEntity.ok(alertService.getAlertsForIdAuthor(userId));
    }
}
