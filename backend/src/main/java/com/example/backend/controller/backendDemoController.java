package com.example.backend.controller;

import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class backendDemoController {

    @PostMapping("/boot/api/hi")
    public String hi() {
        System.out.println("POST 요청 도착: /boot/api/hi");
        return "hi demo";
    }

    @PostMapping("/boot/api/hello")
    public String hello() {
        System.out.println("POST 요청 도착: /boot/api/hello");
        return "hello2 demo";
    }

    @GetMapping("/boot/api/hi")
    public String hiGet() {
        System.out.println("GET 요청 도착: /boot/api/hi");
        return "hi demo";
    }
}
