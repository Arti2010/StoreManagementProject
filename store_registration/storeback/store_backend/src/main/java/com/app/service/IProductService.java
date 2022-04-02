package com.app.service;

import java.util.List;
import java.util.Set;

import com.app.pojos.Product;
import com.app.pojos.Status;
import com.app.pojos.User;

public interface IProductService {

	List<Product> getAllProduct();

	Product addOrUpdateProductDetails(Product e,int catId);

	String deleteProductDetails(int id);

	Product fetchUserDetails(int productId);

	Product UpdateProductDetails(Product e);

	List<Product> findProductByCatId(int catId);

	int addProductforSupply(Product p);

	User addSupplier(int supplierId, int productId);
	
//	Set<User> findByProductId(int productId);
	User findByProductId(int productId);

	List<Product> findProductBySupplierId(int supplierId);

	Status changeStatus(int productId);

//	Set<Product> findProductBySupplierId(int supplierId);

}
