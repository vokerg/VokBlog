package com.vokerg.blog.VokergBlog;

import com.vokerg.blog.VokergBlog.model.AuthenticatedUser;
import com.vokerg.blog.VokergBlog.model.AuthenticatedUserBuilder;
import com.vokerg.blog.VokergBlog.service.AuthorService;
import com.vokerg.blog.VokergBlog.service.JwtUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class AppConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    AuthorService authorService;

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

            String userId = authorService.authenticate(username, password);
            String jwtToken = jwtUserService.generateJwtToken(username, userId);

            if (userId == null) {
                new UsernamePasswordAuthenticationToken("", "");
            }

            AuthenticatedUser user = new AuthenticatedUserBuilder()
                    .setUserId(userId)
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
                //.antMatchers("/**").authenticated()
                .antMatchers("/api/articles").authenticated()
                .and()
                .addFilter(new JwtAuthorizationFilter(authenticationManager, new JwtUserService()));
    }



}
