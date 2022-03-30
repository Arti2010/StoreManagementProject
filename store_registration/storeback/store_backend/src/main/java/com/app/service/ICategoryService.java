package com.app.service;

import java.util.List;
		
import com.app.pojos.Category;
import com.app.pojos.Product;		


public interface ICategoryService {
	List<Category> getAllCategory();
	
	List<Product> getAllProductByCategoryName(int catId);
	Category  findByProductId(int productId);

	Category saveCategory(Category e);

	Category updateCategory(Category e);

	String deleteCategoryDetails(int id);
}
