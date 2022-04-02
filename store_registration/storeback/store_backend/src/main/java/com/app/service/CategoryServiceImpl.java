package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.exception.ResourceNotFoundException;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.repository.CategoryRepo;
import com.app.repository.ProductRepo;
@Service
@Transactional
public class CategoryServiceImpl implements ICategoryService {

	
	
	

	@Autowired
    private CategoryRepo catRepo;
	
//	@Autowired
//	private IProductService productService;
	
	@Autowired
    private ProductRepo proRepo;
	
	@Override
	public List<Category> getAllCategory() {

		return catRepo.findAll();
	}
	
	@Override
	public List<Product> getAllProductByCategoryName(int catId) {
		Category c= catRepo.findById(catId).orElseThrow( () -> new ResourceNotFoundException("category by " + catId + " not found!!!!"));
		return c.getProduct();
	}

	@Override
	public Category findByProductId(int productId) {
		// TODO Auto-generated method stub
		return catRepo.findByProductId(productId).orElseThrow( () -> new ResourceNotFoundException("category by " + productId + " not found!!!!"));
	}

	@Override
	public Category saveCategory(Category e) {
		// TODO Auto-generated method stub
		return catRepo.save(e);
	}

	@Override
	public Category updateCategory(Category e) {
		// TODO Auto-generated method stub
		List<Product> p=proRepo.findByProCatId(e.getId());	
		e.setProduct(p);
		return catRepo.save(e);
	}
	@Override
	public String deleteCategoryDetails(int id) {
	     Category c=catRepo.findById(id).orElseThrow( () -> new ResourceNotFoundException("category by " + id + " not found!!!!"));
		c.setProduct(null);
	     catRepo.deleteById(id);
		return "category	 Details with ID " + id + " deleted successfuly... ";
	}
	
	

}
