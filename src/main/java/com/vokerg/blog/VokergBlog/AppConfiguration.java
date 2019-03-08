package com.vokerg.blog.VokergBlog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class AppConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    UserService userService;

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

            String userId = userService.authenticate(username, password);
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
/*
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
    }
*/


@Autowired
AuthenticationManager authenticationManager;


//    @Autowired
//    JwtAuthenticationFilter jwtAuthenticationFilter;
//
//    @Autowired
//    JwtAuthorizationFilter jwtAuthorizationManager;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
        .authorizeRequests()
                .antMatchers("/api/articles/login").permitAll()
                //.antMatchers("/**").authenticated()
                .antMatchers("/api/articles").authenticated()
                .and()

                //.anyRequest().permitAll()
            //    .authorizeRequests()
            //    .antMatchers(HttpMethod.POST, "/api/login").permitAll()
             //   .antMatchers(HttpMethod.POST, "/api/signup").permitAll()
               // .anyRequest()
               // .authenticated()
                //.and()
                //.addFilter(jwtAuthenticationFilter)
                .addFilter(new JwtAuthorizationFilter(authenticationManager));
        ;

    }



}
