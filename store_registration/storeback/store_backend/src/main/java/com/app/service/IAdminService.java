package com.app.service;

import java.util.List;

import com.app.pojos.User;

public interface IAdminService {
	List<User> getAllUsers();

	User addOrUpdateUserDetails(User e);

	String deleteUserDetails(int id);

	User fetchUserDetails(int userId);
}
