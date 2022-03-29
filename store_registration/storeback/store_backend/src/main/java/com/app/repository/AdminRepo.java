package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.User;

public interface AdminRepo extends JpaRepository<User, Integer> {

}
