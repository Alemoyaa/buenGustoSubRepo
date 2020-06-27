package com.utn.app.buenGusto.articulo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ArticuloRepository extends JpaRepository<ArticuloEntity, Long> {
	
	@Query("SELECT c FROM ArticuloEntity c WHERE c.habilitado = ?1")
	public List<ArticuloEntity> findAllByHabilitado(boolean hab); 

}
