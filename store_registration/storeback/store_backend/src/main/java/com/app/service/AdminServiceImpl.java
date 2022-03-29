package com.app.service;

import java.util.List;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.exception.*;
import com.app.pojos.User;
import com.app.repository.AdminRepo;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {
    @Autowired
	private AdminRepo adminrepo;
	@Override
	public List<User> getAllUsers() {
		
		return adminrepo.findAll();
	}
	@Override
	public User addOrUpdateUserDetails(User e) {
		// TODO Auto-generated method stub
		return adminrepo.save(e);
	}
	@Override
	public String deleteUserDetails(int id) {
		// TODO Auto-generated method stub
		adminrepo.deleteById(id);
		return "user Details with ID " + id + " deleted successfuly... ";
	}
	@Override
	public User fetchUserDetails(int userId) {
		// TODO Auto-generated method stub
		return adminrepo.findById(userId).orElseThrow( () -> new ResourceNotFoundException("Emp by ID " + userId + " not found!!!!"));
	}

}
