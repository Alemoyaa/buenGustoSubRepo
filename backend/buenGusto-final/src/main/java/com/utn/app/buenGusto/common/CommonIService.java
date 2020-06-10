package com.utn.app.buenGusto.common;

import java.util.List;

public interface CommonIService<E> {
	
	public E findById(long id) throws Exception;
	
	public E save(E entityForm) throws Exception; 
	
	public int countPages(int size) throws Exception;
	
	public List<E> findAll(int page, int size) throws Exception;
	
	public boolean delete(long id) throws Exception;
}
