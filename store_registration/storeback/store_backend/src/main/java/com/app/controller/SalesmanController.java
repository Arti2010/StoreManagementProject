package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ProductCat;
import com.app.dto.SupplierUser;
import com.app.pojos.Category;
import com.app.pojos.Product;

import com.app.pojos.User;
import com.app.service.IAdminService;
import com.app.service.ICategoryService;
import com.app.service.IProductService;

import com.app.service.IUserServices;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/salesman/")
public class SalesmanController {
	@Autowired
	private IProductService productService;
	
	@Autowired
	private ICategoryService categoryService;
	

	
	@Autowired
	private IUserServices userService;
	
	@Autowired
	private IAdminService adminservice;
	
	public SalesmanController() {
		System.out.println("in constructor of"+getClass());
	}
	
	
	    
	   @GetMapping("/profile/{userId}")
		public ResponseEntity<?> getUserDetails(@PathVariable int userId) {
			System.out.println("in get emp dtls " + userId);
			try {
				// invoke service layer's method
				return new ResponseEntity<>(adminservice.fetchUserDetails(userId), HttpStatus.OK);
			} catch (RuntimeException e) {
				System.out.println("err in get emp dtls " + e);
				return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
			}

		}
	
	@GetMapping("/category")
	public ResponseEntity<?> getCategoryDetails() {
		System.out.println("in get all category");
		return new ResponseEntity<>(categoryService.getAllCategory(), HttpStatus.OK);
	}
	@GetMapping("/category/{catId}")
	public ResponseEntity<?> getProductByCategoryName(@PathVariable int catId){
		System.out.println("in get all Product by category id");
		return new ResponseEntity<>(categoryService.getAllProductByCategoryName(catId), HttpStatus.OK);
	
	}
	
	@GetMapping("/products")
	public ResponseEntity<?> getProductDetails() {
		System.out.println("in get all emps");
		return new ResponseEntity<>(productService.getAllProduct(), HttpStatus.OK);
	}
	@PostMapping("/products/save")
	public Product addProduct(@RequestBody ProductCat p) {
       Product e =new Product(p.getProdDesc(),p.getProdPrice(),p.getProdQty(),p.getProductName(),p.getDiscount(),p.getFinalPrice());
		System.out.println(e);
       System.out.println("in add product " + e);
		return productService.addOrUpdateProductDetails(e,p.getCatId());
	}

	// add request handling method to delete emp details by emp id
	// Request URL sent by front end : http://host:port/api/employees/1234 ,
	// method=DELETE
	@DeleteMapping("/products/delete/{id}")
	public String deleteProductDetails(@PathVariable int id) {
		System.out.println("in del product dtls " + id);
		return productService.deleteProductDetails(id);
	}

	// add req handling method to get selected emp details by id.
	// URL : http://host:port/api/employees/1234 , method=GET
	@GetMapping("/products/{productId}")
	public ResponseEntity<?> getProductDetails(@PathVariable int productId) {
		System.out.println("in get product dtls " + productId);
		try {
			// invoke service layer's method
			return new ResponseEntity<>(productService.fetchUserDetails(productId), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("err in get product dtls " + e);
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}

	}

	// add request handling method to update existing emp details (update a
	// resource) : PUT
	@PutMapping("/products/update")
	public Product updateEmpDetails(@RequestBody Product e) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in update emp " + e);
		return productService.UpdateProductDetails(e);
		
	}
	
	@PostMapping("/category/save")
	public Category saveCategory(@RequestBody Category e) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in save category " + e);
		return categoryService.saveCategory(e);
		
	}
	@PostMapping("/category/update")
	public Category updateCategory(@RequestBody Category e) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in update category " + e);
		return categoryService.updateCategory(e);
		
	}
	
	@DeleteMapping("/category/delete/{id}")
	public String deletecategoryDetails(@PathVariable int id) {
		System.out.println("in del category dtls " + id);
		return categoryService.deleteCategoryDetails(id);
	}
	
	
//	@GetMapping("/salesman/user/supplier")
//	public ResponseEntity<?> getSupplierDetails() {
//		System.out.println("in get all supplier");
//		return new ResponseEntity<>(supplierService.getAllSupplier(), HttpStatus.OK);
//	}
	
	@PostMapping("/products/supplier/save")
	public int addProductForSupply(@RequestBody Product p) {
       
		System.out.println(p);
       System.out.println("in add product " + p);
		return productService.addProductforSupply(p);
	}
	
//	@PostMapping("/salesman/product/supplier/save")
//	public User addUser(@RequestBody SupplierUser s) // de-serial (un marshalling)
//	{
//
//		System.out.println("in save supplier " + s);
//		return supplierService.addSupplierForProduct(s);
//	}
	
	@PostMapping("/supplier/product/{supplierId}")
	public User addSupplierForProduct(@PathVariable int supplierId, @RequestParam int productId) {
       
		System.out.println(supplierId);
       System.out.println("in add supplier " +supplierId );
		return productService.addSupplier(supplierId,productId);
	
	}
	
	@GetMapping("/user/supplier")
	public ResponseEntity<?> findUserByRole() {
	 userService.findByRole();
	 return new ResponseEntity<>(userService.findByRole(), HttpStatus.OK);
	}
	
	
//	@GetMapping("/prod-supply/{productId}")
//	public ResponseEntity<?> findSupplierByProductId(@PathVariable int productId){
//		System.out.println("in get all supplier by product id");
//		return new ResponseEntity<>(productService.findByProductId(productId), HttpStatus.OK);
//		
//	}
//	
	@GetMapping("/prod-supply/{productId}")
	public ResponseEntity<?> findSupplierByProductId(@PathVariable int productId){
	System.out.println("in get all supplier by product id");
		return new ResponseEntity<>(productService.findByProductId(productId), HttpStatus.OK);
	}
	
	
}
