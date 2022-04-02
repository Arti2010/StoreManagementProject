package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.pojos.User;

public interface ProductRepo extends JpaRepository<Product, Integer>{
	
   List<Product> findByProCatId(int catId);
//   List<Product> findByUser(User u);

List<Product> findByUserId(int supplierId);
}
