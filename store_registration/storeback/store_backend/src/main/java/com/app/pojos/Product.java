package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="product_table")
public class Product extends BaseEntity{
	@Column(length = 100)
	private String prodDesc;
	private int prodPrice;
	private int prodQty;
	@Column(length = 20)
	private String productName;
	private int discount;
	private double finalPrice;
	
	public Product(String prodDesc,int prodPrice,int prodQty,String productName,int discount,double finalPrice) {
	  this.prodDesc=prodDesc;
	  this.prodPrice=prodPrice;
	  this.prodQty=prodQty;
	  this.productName=productName;
	  this.discount=discount;
	  this.finalPrice=finalPrice;
	}
	
    @JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id", nullable = true)
	private Category productCategory;
	
    @JsonIgnore
	@ManyToMany
	@JoinTable(name="salesman_product",joinColumns=@JoinColumn(name="product_id"),inverseJoinColumns=@JoinColumn(name="salesman_id"))
	private Set<Salesman> salesman=new HashSet<>();
	
    @JsonIgnore
	@ManyToMany
	@JoinTable(name="supplier_product",joinColumns=@JoinColumn(name="product_id"),inverseJoinColumns=@JoinColumn(name="supplier_id"))
	private Set<Supplier> supplier=new HashSet<>();
}
