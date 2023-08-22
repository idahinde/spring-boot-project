package com.sample.sample.dal;

import com.sample.sample.entity.Login;
import com.sample.sample.entity.User;

import java.util.List;
import java.util.Optional;

/**
 * @Author: idris is'haq
 * @Date: 11 03, 2023
 */

public interface UserDal {

    User save(User user);

    Optional<User> find(int id);

    List<User> findAll();

    User login(Login login);

}
