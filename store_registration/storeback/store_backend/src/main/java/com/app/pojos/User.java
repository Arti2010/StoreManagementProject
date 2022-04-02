package com.app.pojos;




import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	public User(String firstName, String lastName, String email, String password, Role role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
	}
	





//	@JsonIgnore
//	@ManyToMany(mappedBy="User" ,fetch = FetchType.EAGER)
//	private Set<Product> product=new HashSet<>();
	
	
}
