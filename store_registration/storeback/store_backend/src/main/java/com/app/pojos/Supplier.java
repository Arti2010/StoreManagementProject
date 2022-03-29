package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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
@Table(name="supplier_table")
public class Supplier  extends BaseEntity{

	@OneToOne
	@JoinColumn(name="supplier_id",nullable=false)
	@MapsId
	private User user;
	

	
	private String description;
	
}
