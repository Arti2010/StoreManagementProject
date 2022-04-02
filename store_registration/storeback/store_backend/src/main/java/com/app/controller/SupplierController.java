package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Status;
import com.app.pojos.User;
import com.app.service.IProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/supplier/")
public class SupplierController {
	@Autowired
	private IProductService productService;
	
	
	@GetMapping("/product/{id}")
	public ResponseEntity<?> getProductBySupplierId(@PathVariable int id){
		System.out.println("in get all Product by supplier id");
		return new ResponseEntity<>(productService.findProductBySupplierId(id), HttpStatus.OK);
		
	}
//	
	
	@PostMapping("/status")
	public Status changeStatus(@RequestParam int productId) {
		return productService.changeStatus(productId);
	}

}
