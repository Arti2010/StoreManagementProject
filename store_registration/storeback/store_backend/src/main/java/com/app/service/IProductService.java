package com.app.service;

import java.util.List;

import com.app.pojos.Product;
import com.app.pojos.User;
public interface IProductService {

	List<Product> getAllProduct();

	Product addOrUpdateProductDetails(Product e,int catId);

	String deleteProductDetails(int id);

	Product fetchUserDetails(int productId);

	Product UpdateProductDetails(Product e);



	

}
