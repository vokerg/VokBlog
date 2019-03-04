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

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager customAuthenticationManager() throws Exception {
        return new AuthenticationManager() {
            @Override
            public Authentication authenticate(Authentication authentication) throws AuthenticationException {
                return new UsernamePasswordAuthenticationToken(authentication.getPrincipal(), authentication.getAuthorities(), null);
            }
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
                .antMatchers("/**").permitAll()

                //.anyRequest().permitAll()
            //    .authorizeRequests()
            //    .antMatchers(HttpMethod.POST, "/api/login").permitAll()
             //   .antMatchers(HttpMethod.POST, "/api/signup").permitAll()
               // .anyRequest()
               // .authenticated()
                //.and()
                //.addFilter(jwtAuthenticationFilter)
                //.addFilter(jwtAuthorizationManager)
        ;

    }



}
