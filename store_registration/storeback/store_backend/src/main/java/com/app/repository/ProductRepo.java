package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Product;

public interface ProductRepo extends JpaRepository<Product, Integer>{
	
   List<Product> findByProCatId(int catId);
}
