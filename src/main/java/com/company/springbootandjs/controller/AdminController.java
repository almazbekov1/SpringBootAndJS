package com.company.springbootandjs.controller;


import com.company.springbootandjs.model.User;
import com.company.springbootandjs.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private UserRepo userRepo;

    @CrossOrigin
    @GetMapping
    public List<User> getUsers(){
        return userRepo.findAll();
    }
//    @GetMapping("/{id}")
//    public User getUserById(@PathVariable Long id){
//        return userRepo.getById(id);
//    }
    @CrossOrigin
    @PostMapping
    public User addUser(@RequestBody User user){
        return userRepo.save(user);
    }

}
