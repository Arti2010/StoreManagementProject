package com.app.dto;

import javax.persistence.Column;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginRequest {
	@Column(length = 30, nullable = false, unique = true)
	private String email;
	@Column(length = 20, nullable = false)
	private String password;
	
}
