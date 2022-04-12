package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.LoginRequest;
import com.app.dto.RegisterDto;
import com.app.dto.UserAddressDto;
import com.app.exception.ResourceNotFoundException;
import com.app.pojos.Address;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.repository.AddressRepo;
import com.app.repository.UserRepository;


@Service
@Transactional
public class UserServiceImpl implements IUserServices {
	



	

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private AddressRepo addRepo;
	
	
	
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

	@Override
	public String saveAddress(UserAddressDto ua) {
		// TODO Auto-generated method stub
		User u= userRepo.findById(ua.getUserId()).orElseThrow( () -> new ResourceNotFoundException("User by ID " + ua.getUserId() + " not found!!!!"));
		Address a =new Address(ua.getShopName(),ua.getCity(),ua.getZipCode(),ua.getState(),ua.getCountry());
		
		Address a1= addRepo.findByUserId(ua.getUserId());
		if(a1!=null)
		{    a1.setShopName(a.getShopName());
		a1.setCity(a.getCity());
		a1.setZipCode(a.getZipCode());
		a1.setCountry(a.getCountry());
		a1.setState(a.getState());
			addRepo.save(a1);
		}
		else {
			a.setUser(u);
		addRepo.save(a);
		}
		return "Address Added Successfully";
	}

	@Override
	public Address findAddressByUserId(int id) {

		return  addRepo.findByUserId(id);
	}
	
		
}
