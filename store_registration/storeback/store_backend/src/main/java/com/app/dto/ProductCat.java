package com.app.dto;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductCat {
	private String prodDesc;
	private int prodPrice;
	private int prodQty;	
	private String productName;
	private int discount;
	private double finalPrice;
	private int catId;
}
