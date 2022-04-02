package com.app.service;

import java.util.List;

import com.app.dto.LoginRequest;
import com.app.dto.RegisterDto;
import com.app.dto.UserDTO;
import com.app.pojos.Address;
import com.app.pojos.Product;
import com.app.pojos.User;

public interface IUserServices {
	User authenticateUser(LoginRequest loginRequest);
	User fetchUserDetails(int userId);
	List<User> findByRole();
	String registrUser(User u);
	
}
