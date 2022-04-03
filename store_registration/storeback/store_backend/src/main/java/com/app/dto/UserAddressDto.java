package com.app.dto;

import com.app.pojos.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserAddressDto {
	private String shopName;
	private String city;
	private int zipCode;
	private String state;
	private String country;
	private int userId;
	
	
}
