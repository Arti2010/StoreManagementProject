package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="salesman_table")
public class Salesman extends BaseEntity{
	private String storeName;
	private String description;
	
	
	@OneToOne
	@JoinColumn(name="salseman_id"	,nullable=false)
	@MapsId
	private User user;
	
	
	
	
	
	
	
	

}
