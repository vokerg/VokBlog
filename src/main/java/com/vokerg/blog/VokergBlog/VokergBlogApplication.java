package com.vokerg.blog.VokergBlog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class VokergBlogApplication {

	public static void main(String[] args) {
		SpringApplication.run(VokergBlogApplication.class, args);
	}

}
