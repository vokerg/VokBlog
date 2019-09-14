package com.vokerg.blog.VokergBlog.controller;

import com.vokerg.blog.VokergBlog.model.Alert;
import com.vokerg.blog.VokergBlog.repository.AlertRepository;
import com.vokerg.blog.VokergBlog.service.AlertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api/alerts")
public class AlertController {
    @Autowired
    AlertService alertService;

    @Autowired
    AlertRepository alertRepository;

    @GetMapping("")
    public ResponseEntity<List<Alert>> getAlerts() {
        String userId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        return ResponseEntity.ok(alertService.getAlertsForIdAuthor(userId));
    }

    @PostMapping("/{id}/read")
    public ResponseEntity readAlert(@PathVariable String id) {
        String userId =  SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        Alert alert = alertRepository.findById(id).orElse(null);
        if (alert == null || !alert.getIdAuthorTarget().equals(userId)) {
            return ResponseEntity.badRequest().body(null);
        }
        alertService.readAlert(alert);
        return ResponseEntity.ok(null);
    }
}
