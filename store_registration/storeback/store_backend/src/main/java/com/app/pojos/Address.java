package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="address_tbl")
public class Address extends BaseEntity  {
	private int houseNo;
	private String city;
	private int zipCode;
	private String state;
	private String country;
	

	@OneToOne
	@JoinColumn(name="user_id",nullable=false)
	@MapsId
	private User user;
	
	
	
}
