package com.sample.sample.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @Author: idris is'haq
 * @Date: 11 03, 2023
 */

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @Column(columnDefinition = "varchar(25) not null")
    private String firstName;

    @Column(columnDefinition = "varchar(25) not null")
    private String lastName;

    @Column(columnDefinition = "varchar(25) not null")
    private String username;

    @Column(columnDefinition = "text not null ")
    private String password;

}
