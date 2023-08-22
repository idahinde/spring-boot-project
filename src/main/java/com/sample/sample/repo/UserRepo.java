package com.sample.sample.repo;

import com.sample.sample.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * @Author: idris is'haq
 * @Date: 11 03, 2023
 */

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

    @Query("select u from User u where u.username=:username and u.password=:password ")
    User login(@Param("username") String u, @Param("password") String p);

}
