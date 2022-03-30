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
public class ProductServiceImpl implements IProductService{
	
	

	@Autowired
	private ProductRepo productRepo;
	@Autowired
    private CategoryRepo catRepo;
	
	@Autowired
	private ICategoryService  catService;

	@Override
	public List<Product> getAllProduct() {
		
		 return productRepo.findAll();
	}
	@Override
	public Product UpdateProductDetails(Product e) {
		// TODO Auto-generated method stub
		Category c = catService.findByProductId(e.getId());
//		catRepo.save(c);
		e.setProCat(c);
		return productRepo.save(e);
	}

	@Override
	public Product addOrUpdateProductDetails(Product e,int catId) {
	
		Category c=catRepo.findById(catId).orElseThrow(() -> new ResourceNotFoundException("catId by ID " + catId + " not found!!!!"));
		e.setProCat(c);;// TODO Auto-generated method stub
		return productRepo.save(e);
	}

	@Override
	public String deleteProductDetails(int id) {
		// TODO Auto-generated method stub
		productRepo.deleteById(id);
		return "product Details with ID " + id + " deleted successfuly... ";
	}

	@Override
	public Product fetchUserDetails(int productId) {
		// TODO Auto-generated method stub
		return productRepo.findById(productId).orElseThrow( () -> new ResourceNotFoundException("Product by ID " + productId + " not found!!!!"));
	}
	
	@Override
	public List<Product> findProductByCatId(int catId){
		
		
		return productRepo.findByProCatId(catId);
		
	}

}
