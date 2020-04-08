package com.utn.app.buenGusto.commons;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public abstract class commonService <ENTITY extends commonEntity, R extends JpaRepository<ENTITY, Long>> implements commonIService<ENTITY>{
	
	@Autowired
	protected R repository;	
	

	@Override
	public ENTITY findById(long id) throws Exception {
		try {

			// se usa para atrapar un null
			Optional<ENTITY> varOptional = repository.findById(id);

			ENTITY entity = varOptional.get();

			return entity;

		} catch (Exception e) {

			throw new Exception(e.getMessage());
		}
		
	}

	@Override
	public ENTITY save(ENTITY entityForm) throws Exception {
		try {

			entityForm = repository.save(entityForm);

			return entityForm;

		} catch (Exception e) {

			throw new Exception(e.getMessage());
		}
	}

	@Override
	public ENTITY update(long id, ENTITY entityForm) throws Exception {

		try {
			Optional<ENTITY> entityOptional = repository.findById(id);

			ENTITY entity = entityOptional.get();

			entity = repository.save(entityForm);

			return entity;

		} catch (Exception e) {

			throw new Exception(e.getMessage());

		}

	}

	@Override
	public int countPages(int size) throws Exception {
		try {
			Pageable pageable = PageRequest.of(0, size);
			return repository.findAll(pageable).getTotalPages();			

		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	@Override
	public List<ENTITY> findAll(int page, int size) throws Exception {
		
		try {
			Pageable pageable = PageRequest.of(page, size);
			return repository.findAll(pageable).getContent();			

		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
	}
	
	public boolean delete(long id) throws Exception{
		try {
			if(repository.existsById(id)) {
				repository.deleteById(id);
			}		
			
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
		return !repository.existsById(id);
	}
	 
}
