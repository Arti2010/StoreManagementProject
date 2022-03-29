package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//user_id	first_name	last_name	email	password	role	phone
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "users")
public class User extends BaseEntity{
	@Column(length = 20, nullable = false)
	private String firstName;
	@Column(length = 20, nullable = false)
	private String lastName;
	@Column(length = 30, nullable = false, unique = true)
	private String email;
	@Column(length = 20, nullable = false)
	private String password;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private Role role;
	@Column(length = 20)
	private String phone;
	
	
	
	
	
	
	
	
}
