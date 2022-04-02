package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="category_table")
public class Category extends BaseEntity {
	private String catName;
	private String catType;
	private String catDesc;
	

	@OneToMany(mappedBy ="proCat",orphanRemoval = true,fetch = FetchType.EAGER )
	private List<Product> product= new ArrayList<>();

}
