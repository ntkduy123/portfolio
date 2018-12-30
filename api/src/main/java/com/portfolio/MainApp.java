package com.portfolio;

import com.portfolio.config.Cors;
import com.portfolio.config.ResourceHandler;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableAutoConfiguration
@EnableScheduling
public class MainApp {
    public static void main(String[] args) {
        SpringApplication.run(MainApp.class, args);
    }

    @Bean
    public WebMvcConfigurer configurer() {
        return new ResourceHandler();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new Cors();
    }
}
