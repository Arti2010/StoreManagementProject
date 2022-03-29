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

import com.app.pojos.Product;
import com.app.pojos.User;
import com.app.service.IProductService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/salesman/")
public class SalesmanController {
	@Autowired
	private IProductService productService;
	
	public SalesmanController() {
		System.out.println("in constructor of"+getClass());
	}
	
	@GetMapping("/products")
	public ResponseEntity<?> getProductDetails() {
		System.out.println("in get all emps");
		return new ResponseEntity<>(productService.getAllProduct(), HttpStatus.OK);
	}
	@PostMapping("/products/save")
	public Product addProduct(@RequestParam String prodDesc,@RequestParam int prodPrice,@RequestParam int prodQty,@RequestParam String productName,@RequestParam int discount,@RequestParam double finalPrice,@RequestParam int catId) // de-serial (un marshalling)
	{
       Product e =new Product(prodDesc,prodPrice,prodQty,productName,discount,finalPrice);
		System.out.println("in add product " + e);
		return productService.addOrUpdateProductDetails(e,catId);
	}

	// add request handling method to delete emp details by emp id
	// Request URL sent by front end : http://host:port/api/employees/1234 ,
	// method=DELETE
	@DeleteMapping("/products/{id}")
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
	
}
