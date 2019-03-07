package com.vokerg.blog.VokergBlog;

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

//@Component
public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    //@Autowired
    AuthenticationManager authenticationManager;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
        this.authenticationManager = authenticationManager;
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

        if (!validateToken(token)) {
            throw new RuntimeException("Something bad happened");
        }

        Claims claims = Jwts.parser().setSigningKey("super_secret_key".getBytes())
                .parseClaimsJws(token).getBody();

        String username = (String) claims.getSubject();
        String iduser = (String) claims.get("iserId");

        UserDetails userDetails = User
                .withUsername(username)
                .accountExpired(false)
                .accountLocked(false)
                .disabled(false)
                .build();
                //TODO: .authorities(something)


        //TODO: add granted authority
        Authentication auth = new UsernamePasswordAuthenticationToken(userDetails, false, new ArrayList<>());
        SecurityContextHolder.getContext().setAuthentication(auth);

        chain.doFilter(request, response);

    }

    private boolean validateToken(String token) {
        return true;
    }
}
