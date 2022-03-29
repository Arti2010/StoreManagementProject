package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.app.pojos.User;
import com.app.service.IAdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/admin")
public class AdminController {
	@Autowired
	private IAdminService adminservice;

	public AdminController() {
		System.out.println("in constructor of"+getClass());
	}
	@GetMapping
	public ResponseEntity<?> getAllUserDetails() {
		System.out.println("in get all emps");
		return new ResponseEntity<>(adminservice.getAllUsers(), HttpStatus.OK);
	}
	
	@PostMapping("/save")
	public User addUser(@RequestBody User e) // de-serial (un marshalling)
	{

		System.out.println("in add user " + e);
		return adminservice.addOrUpdateUserDetails(e);
	}

	// add request handling method to delete emp details by emp id
	// Request URL sent by front end : http://host:port/api/employees/1234 ,
	// method=DELETE
	@DeleteMapping("/{id}")
	public String deleteUserDetails(@PathVariable int id) {
		System.out.println("in del emp dtls " + id);
		return adminservice.deleteUserDetails(id);
	}

	// add req handling method to get selected emp details by id.
	// URL : http://host:port/api/employees/1234 , method=GET
	@GetMapping("/{userId}")
	public ResponseEntity<?> getUserDetails(@PathVariable int userId) {
		System.out.println("in get emp dtls " + userId);
		try {
			// invoke service layer's method
			return new ResponseEntity<>(adminservice.fetchUserDetails(userId), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("err in get emp dtls " + e);
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}

	}

	// add request handling method to update existing emp details (update a
	// resource) : PUT
	@PutMapping("/update")
	public User updateEmpDetails(@RequestBody User e) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in add emp " + e);
		return adminservice.addOrUpdateUserDetails(e);
	}
	//add req handling method to find all emps drawing salary > specific value
	
	
	

}
