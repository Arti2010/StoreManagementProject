package com.app.dto;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDTO {
	@Column(length = 20, nullable = false)
	private String firstName;
	@Column(length = 20, nullable = false)
	private String lastName;
	@Column(length = 30, nullable = false, unique = true)
	private String email;
	@Column(length = 20)
	private String phone;
}
