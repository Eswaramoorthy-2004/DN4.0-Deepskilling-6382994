package com.cognizant.springlearn;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")  // this will map to http://localhost:8080/
    public String sayHello() {
        return "Hello World!";
    }

    @GetMapping("/welcome")  // another example endpoint
    public String welcome() {
        return "Welcome to the Spring Boot Application!";
    }
}
