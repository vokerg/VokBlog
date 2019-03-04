package com.vokerg.blog.VokergBlog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.stereotype.Component;

//@Component
public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    @Autowired
    AuthenticationManager authenticationManager;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }
}
