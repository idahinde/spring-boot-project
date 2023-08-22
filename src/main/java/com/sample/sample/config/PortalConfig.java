package com.sample.sample.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @Author: idris is'haq
 * @Date: 11 03, 2023
 */

@Configuration
public class PortalConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedHeaders("*")
                .allowedOrigins("http://localhost:4200")
                .allowedMethods("GET", "POST", "PUT")
                .maxAge(-1)
                .allowCredentials(true);
    }

}
