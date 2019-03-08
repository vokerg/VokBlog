package com.vokerg.blog.VokergBlog.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtUserService {
    public String generateJwtToken(String username, String userId) {
        Claims claims = Jwts.claims().setSubject(username);
        claims.put("userId", userId);

        Date now = new Date();
        Date validity = new Date(now.getTime() + 3600000);

        byte[] secretKey = "super_secret_key".getBytes();

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();
    }

    public String getUserIdFromJsonToken(String token) {
        if (!validateToken(token)) {
            throw new RuntimeException("Something bad happened");
        }

        Claims claims = Jwts.parser().setSigningKey("super_secret_key".getBytes())
                .parseClaimsJws(token).getBody();

        return (String) claims.get("userId");
    }

    private boolean validateToken(String token) {
        return true;
    }
}
