package com.vokerg.blog.VokergBlog.configuration;

import com.vokerg.blog.VokergBlog.model.AuthenticatedUser;
import com.vokerg.blog.VokergBlog.model.AuthenticatedUserBuilder;
import com.vokerg.blog.VokergBlog.model.Author;
import com.vokerg.blog.VokergBlog.service.AuthenticationService;
import com.vokerg.blog.VokergBlog.service.JwtUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class AuthenticationConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    AuthenticationService authenticationService;

    @Autowired
    JwtUserService jwtUserService;

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager customAuthenticationManager() {
        return authentication -> {

            String username = (String) authentication.getPrincipal();
            String password = (String) authentication.getCredentials();

            Author author = authenticationService.authenticate(username, password);

            if (author == null) {
                return new UsernamePasswordAuthenticationToken("", "");
            }

            String jwtToken = jwtUserService.generateJwtToken(username, author.getId());

            AuthenticatedUser user = new AuthenticatedUserBuilder()
                    .setUserId(author.getId())
                    .setUsername(username)
                    .setToken(jwtToken)
                    .createAuthenticatedUser();

            return new UsernamePasswordAuthenticationToken(user, null, null);
        };
    }

@Autowired
AuthenticationManager authenticationManager;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
        .authorizeRequests()
                .antMatchers("/api/users/login").permitAll()
                .antMatchers("/api/users/signup").permitAll()
                .antMatchers("/api/authors/**").permitAll()
                //.antMatchers("/**").authenticated()
                .antMatchers(HttpMethod.PUT, "/api/articles/**").authenticated()
                .antMatchers(HttpMethod.DELETE, "/api/articles/**").authenticated()
                .antMatchers(HttpMethod.PUT, "/api/comments/**").authenticated()
                .antMatchers(HttpMethod.DELETE, "/api/comments/**").authenticated()
                .antMatchers(HttpMethod.GET, "/**").permitAll()
                //.antMatchers("/api/articles").authenticated()
                .and()
                .addFilter(new JwtAuthorizationFilter(authenticationManager, new JwtUserService()));
    }



}
