package com.example.RegisterLoguin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class RegisterLoguinApplication {

	public static void main(String[] args) {
		SpringApplication.run(RegisterLoguinApplication.class, args);
	}

}
