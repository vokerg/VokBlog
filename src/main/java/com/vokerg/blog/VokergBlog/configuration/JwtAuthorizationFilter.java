package com.vokerg.blog.VokergBlog.configuration;

import com.vokerg.blog.VokergBlog.service.JwtUserService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.naming.AuthenticationException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    private JwtUserService jwtUserService;
    private AuthenticationManager authenticationManager;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager, JwtUserService jwtUserService) {
        super(authenticationManager);
        this.authenticationManager = authenticationManager;
        this.jwtUserService = jwtUserService;
    }

    @Override
    public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        String token = request.getHeader("Authorization");

        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
        } else {
            SecurityContextHolder.clearContext();
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }
        
        String iduser = null;
        try {
            iduser = jwtUserService.getUserIdFromJsonToken(token);
        } catch (AuthenticationException e) {
            SecurityContextHolder.clearContext();
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }

        //TODO: add granted authority
        Authentication auth = new UsernamePasswordAuthenticationToken(iduser, false, new ArrayList<>());
        SecurityContextHolder.getContext().setAuthentication(auth);

        chain.doFilter(request, response);

    }

}
