package com.sample.sample.dao;

import com.sample.sample.dal.UserDal;
import com.sample.sample.entity.Login;
import com.sample.sample.entity.User;
import com.sample.sample.repo.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @Author: idris is'haq
 * @Date: 11 03, 2023
 */

@Service
@AllArgsConstructor
public class UserDao implements UserDal {

    private UserRepo userRepo;

    @Override
    public User save(User user) {
        return userRepo.save(user);
    }

    @Override
    public Optional<User> find(int id) {
        return userRepo.findById(id);
    }

    @Override
    public List<User> findAll() {
        return userRepo.findAll();
    }

    @Override
    public User login(Login login) {
        return userRepo.login(login.getUsername(), login.getPassword());
    }

}
