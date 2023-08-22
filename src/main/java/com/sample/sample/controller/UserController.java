package com.sample.sample.controller;

import com.sample.sample.dal.UserDal;
import com.sample.sample.entity.Login;
import com.sample.sample.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;
import java.util.Optional;

/**
 * @Author: idris is'haq
 * @Date: 11 03, 2023
 */

@Controller
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {

    private UserDal userDal;

    @PostMapping
    public ResponseEntity<Map<String, Object>> save(@ModelAttribute User user) {
        User saveUser = userDal.save(user);
        if (saveUser.getUserId() > 0) {
            return ResponseEntity.ok(Map.of("message", "Successful", "data", saveUser));
        } else {
            return ResponseEntity.badRequest().body(Map.of("message", "Unable to create user"));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getUser(@PathVariable("id") int id) {
        Optional<User> optionalUser = userDal.find(id);
        if (optionalUser.isPresent()) {
            return ResponseEntity.ok(Map.of("message", "Successful", "data", optionalUser.get()));
        } else {
            return ResponseEntity.badRequest().body(Map.of("message", "invalid user id"));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@ModelAttribute Login login) {
        User user = userDal.login(login);
        if (user != null) {
            return ResponseEntity.ok(Map.of("message", "Login Successful", "data", user));
        } else {
            return ResponseEntity.badRequest().body(Map.of("message", "Invalid Username or password", "data", new User()));
        }
    }

}
