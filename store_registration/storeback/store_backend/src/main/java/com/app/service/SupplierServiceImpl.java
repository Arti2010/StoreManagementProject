package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Supplier;
import com.app.repository.SupplierRepo;

@Service
@Transactional
public class SupplierServiceImpl implements ISupplierService {
	
	@Autowired
	private SupplierRepo supplierRepo;

	@Override
	public List<Supplier> getAllSupplier() {
		// TODO Auto-generated method stub
		return supplierRepo.findAll();
	}
	

}
