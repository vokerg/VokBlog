package com.vokerg.blog.VokergBlog.service;

import com.vokerg.blog.VokergBlog.model.AuthenticatedUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    AuthenticationManager authenticationManager;

    public AuthenticatedUser authenticatedUser(String username, String password) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(username, password));
        return (authentication.isAuthenticated()) ?  (AuthenticatedUser) authentication.getPrincipal() : null;
    }
}
