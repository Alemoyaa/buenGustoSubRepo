package com.utn.app.buenGusto.common;

public interface CommonIService<E> {

	public E findById(long id) throws Exception;

	public E save(E entityForm) throws Exception;
	
	public E update(long id, E entityForm) throws Exception;

	public int countPages(int size) throws Exception;

	public Iterable<E> findAll() throws Exception;

	public boolean delete(long id) throws Exception;

	public Iterable<E> findAllByHabilitado(boolean habilitado) throws Exception;
	
}
