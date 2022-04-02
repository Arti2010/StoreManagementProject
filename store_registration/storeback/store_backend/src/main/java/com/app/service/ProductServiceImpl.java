package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.exception.ResourceNotFoundException;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.pojos.Status;

import com.app.pojos.User;
import com.app.repository.CategoryRepo;
import com.app.repository.ProductRepo;
import com.app.repository.UserRepository;
@Service
@Transactional
public class ProductServiceImpl implements IProductService{
	
	

	@Autowired
	private ProductRepo productRepo;
	@Autowired
    private CategoryRepo catRepo;
	
	@Autowired
    private UserRepository userRepo;
	
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
		e.setProCat(c);
		e.setStatus(Status.NOTDELIVERED);	// TODO Auto-generated method stub
		return productRepo.save(e);
	}

	@Override
	public String deleteProductDetails(int id) {
		// TODO Auto-generated method stub
		Product p=productRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("catId by ID " + id + " not found!!!!"));
		p.setUser(null);
		
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
	@Override
	public int addProductforSupply(Product p) {
		Product p1=productRepo.save(p);
		p1.setStatus(Status.NOTDELIVERED);
		return p1.getId();
	}
	@Override
	public User addSupplier(int supplierId,int productId) {
	User u=userRepo.findById(supplierId).orElseThrow( () -> new ResourceNotFoundException("Product by ID " + supplierId + " not found!!!!"));
	          Product p=productRepo.findById(productId).orElseThrow( () -> new ResourceNotFoundException("Product by ID " + productId + " not found!!!!"));
	
//	      p.AddUser(u);
	          p.setUser(u);
		return u;
	}
//	@Override
//	public Set<User> findByProductId(int productId) {
//		Product p=productRepo.findById(productId).orElseThrow( () -> new ResourceNotFoundException("Product by ID " + productId + " not found!!!!"));
//		p.getUser().size();
//		return p.getUser();
//	}
	
	@Override
	public User findByProductId(int productId) {
		Product p=productRepo.findById(productId).orElseThrow( () -> new ResourceNotFoundException("Product by ID " + productId + " not found!!!!"));
		
		return p.getUser();
	}
	@Override
	public List<Product> findProductBySupplierId(int supplierId) {
		// TODO Auto-generated method stub@Autowired
	    List<Product> p= productRepo.findByUserId(supplierId);
	    return p;
	}
	@Override
	public Status changeStatus(int productId) {
		// TODO Auto-generated method stub
		Product p=productRepo.findById(productId).orElseThrow( () -> new ResourceNotFoundException("Product by ID " + productId + " not found!!!!"));
		if(p.getStatus()==Status.DELIVERED)
			p.setStatus(Status.NOTDELIVERED);
			
		else 
			p.setStatus(Status.DELIVERED);
		return p.getStatus();
	}
	
	
	
	
	
	
	
	
	

}
