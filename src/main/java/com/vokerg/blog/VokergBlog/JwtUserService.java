package com.vokerg.blog.VokergBlog;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtUserService {
    public String login(String username, String userId) {
        Claims claims = Jwts.claims().setSubject(username);
        claims.put("userId", userId);
        //claims.put("auth", )

        Date now = new Date();
        Date validity = new Date(now.getTime() + 3600000);

        byte[] secretKey = "super_secret_key".getBytes();

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();

        //return "working " + username + " " + password;
    }
}
