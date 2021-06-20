package com.company.springbootandjs.controller;


import com.company.springbootandjs.model.User;
import com.company.springbootandjs.repo.UserRepo;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
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
        System.out.println("post mapping");
        System.out.println();
        return userRepo.save(user);
    }
    @CrossOrigin
    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") int id){
        System.out.println("get id mapping");
        System.out.println();

        return userRepo.getById((long)id);
    }
    @CrossOrigin
    @PutMapping
    public User putUser(@RequestBody User user){
        System.out.println("put mapping");
        System.out.println(user.getLastName());
        System.out.println(user.getFirstName());
        System.out.println(user.getEmail());
        System.out.println();

        return userRepo.save(user);
    }
    @CrossOrigin
    @PutMapping("/{id}")
    public User putUserId(@PathVariable("id") int id,@RequestBody User user){
        System.out.println("put mapping");
        System.out.println("put id mapping");
        System.out.println();
        System.out.println();

        user.setId((long)id);
        return userRepo.save(user);
    }

}
