package com.utn.app.buenGusto.categoria;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface CategoriaRepository extends JpaRepository<CategoriaEntity, Long> {
	
	@Query("SELECT c FROM CategoriaEntity c WHERE c.habilitado = ?1")
	public List<CategoriaEntity> findAllByHabilitado(boolean hab); 

}
