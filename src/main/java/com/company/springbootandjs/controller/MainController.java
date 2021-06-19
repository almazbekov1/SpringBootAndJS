package com.company.springbootandjs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Scanner;

@Controller
public class MainController {

    @GetMapping
    public String get(){
        return "test";
    }

}
