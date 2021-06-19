package com.company.springbootandjs.repo;


import com.company.springbootandjs.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
}
