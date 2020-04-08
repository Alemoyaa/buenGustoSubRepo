package com.utn.app.buenGusto.commons;

import java.util.List; 

public interface commonIService<E> {

	List<E> findAll(int page, int size) throws Exception; 

	E findById(long id) throws Exception;

	E save(E entity) throws Exception;

	E update(long id, E entity) throws Exception;
	
	int countPages(int size) throws Exception; 

	boolean delete(long id) throws Exception;

}
