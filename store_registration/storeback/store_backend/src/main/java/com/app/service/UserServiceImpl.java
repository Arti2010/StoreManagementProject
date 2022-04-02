package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.LoginRequest;
import com.app.dto.RegisterDto;
import com.app.exception.ResourceNotFoundException;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.repository.UserRepository;


@Service
@Transactional
public class UserServiceImpl implements IUserServices {
	



	

	@Autowired
	private UserRepository userRepo;
	
	
	@Override
	public User fetchUserDetails(int userId) {
		// TODO Auto-generated method stub
	 return userRepo.findById(userId).orElseThrow( () -> new ResourceNotFoundException("Product by ID " + userId + " not found!!!!"));
		
	}
	
	@Override
	public User authenticateUser(LoginRequest loginRequest) {
		return userRepo.findByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
	}
	
	@Override
	public List<User> findByRole() {
		// TODO Auto-generated method stub
		return userRepo.findByRole(Role.SUPPLIER);
	}
	
	@Override
	public String registrUser(User u) {
//		User u1 = new User(u.getFirstName(),u.getLastName(),u.getEmail(),u.getPassword(),u.getRole());
		User alreadyPresent =userRepo.findByEmail(u.getEmail());
		if(alreadyPresent==null)
		{
			userRepo.save(u);
			return "Successfully Registered!!!";
			
		}
		else
		{
			return "Already Registured !!!";
		}
		
	}
}
