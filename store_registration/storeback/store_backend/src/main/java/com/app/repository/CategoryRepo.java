package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Category;

public interface CategoryRepo  extends JpaRepository<Category, Integer> {
	
    Optional<Category> findByCatName(String catName);
    Optional<Category>  findByProductId(int productId);

}
