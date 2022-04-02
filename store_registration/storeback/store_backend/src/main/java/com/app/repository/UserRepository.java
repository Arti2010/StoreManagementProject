package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Category;
import com.app.pojos.Role;
import com.app.pojos.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
//	@Query("select u from users u where u.email=:em and u.password=:pass")
//	User authenticateUser(@Param("em")String em, @Param("pass")String pass);
 User findByEmailAndPassword(String email,String password);
 
  List<User> findByRole(Role r);
//	@Query("select p from users u where u.email=:em and u.password=:pass")
//List<Product> findbyUserId(int supplierId);
 
 
 


	
	
}
