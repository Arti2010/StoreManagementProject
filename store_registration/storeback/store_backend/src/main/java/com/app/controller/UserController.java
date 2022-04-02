package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.dto.ResponseDTO;
import com.app.pojos.User;
import com.app.service.IUserServices;
import com.app.service.UserServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
@RestController
public class UserController {

@Autowired
private IUserServices userService;
   
	public UserController() {
		System.out.println("in ctor of "+getClass().getName());	
	}
	
	
	@GetMapping("/user/{Id}")
	public ResponseEntity<?> getUserDetails(@PathVariable int Id) {
		System.out.println("in get product dtls " + Id);
		try {
			// invoke service layer's method
			return new ResponseEntity<>(userService.fetchUserDetails(Id), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("err in get user dls " + e);
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}

	}
	
	@PostMapping("/login")
	public ResponseDTO<?> authenticateUser(@RequestBody LoginRequest loginRequest){
		System.out.println("in authenticateUser: "+loginRequest);
		try {		
			User u = userService.authenticateUser(loginRequest);
			System.out.println("User : "+u);
		return new ResponseDTO<>(HttpStatus.OK, "User Added", u);
		}catch (RuntimeException e) {
			System.out.println("err in authenticateUser : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "User Not Added", null);
		}
	}
}
