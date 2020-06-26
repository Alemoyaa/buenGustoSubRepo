package com.utn.app.buenGusto.common;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public abstract class CommonService<E extends CommonEntity, R extends JpaRepository<E, Long>>
		implements CommonIService<E> {

	@Autowired
	protected R repository;

	@Override
	public E findById(long id) throws Exception {
		try {
			Optional<E> varOptional = repository.findById(id);
			if (varOptional.isPresent())
				return varOptional.get();
			else
				return null;
		} catch (Exception e) {

			throw new Exception(e.getMessage());
		}

	}

	@Override
	public E save(E entity) throws Exception {
		try {
			entity = repository.save(entity);
			return entity;
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	@Override
	public E update(long id, E entity) throws Exception {
		try {
			if (repository.existsById(id) == false) {
				throw new Exception("No value present");
			}
			entity.setId(id);
			entity = repository.save(entity);
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
	public List<E> findAll(/*int page, int size*/) throws Exception {

		try {
			//Pageable pageable = PageRequest.of(page, size);
			return repository.findAll(/*pageable*/)/*.getContent()*/;

		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}

	}

	public boolean delete(long id) throws Exception {
		E entity;
		try {
			if (repository.existsById(id)) {
				entity = repository.getOne(id);
				entity.setHabilitado(false);
				entity = repository.save(entity);
			}

		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}

		return !repository.existsById(id);

	}

}
