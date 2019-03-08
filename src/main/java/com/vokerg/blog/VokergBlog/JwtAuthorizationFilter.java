package com.vokerg.blog.VokergBlog;

import com.vokerg.blog.VokergBlog.service.JwtUserService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.stereotype.Component;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
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
            chain.doFilter(request, response);
            return;
        }

        String iduser = jwtUserService.getUserIdFromJsonToken(token);


/*
        UserDetails userDetails = User
                .withUsername(username)
                .password("")
                .accountExpired(false)
                .accountLocked(false)
                .disabled(false)
                .authorities(new ArrayList<>())
                .build();
*/
        //TODO: add granted authority


        Authentication auth = new UsernamePasswordAuthenticationToken(iduser, false, new ArrayList<>());
        SecurityContextHolder.getContext().setAuthentication(auth);

        chain.doFilter(request, response);

    }

    private boolean validateToken(String token) {
        return true;
    }
}
