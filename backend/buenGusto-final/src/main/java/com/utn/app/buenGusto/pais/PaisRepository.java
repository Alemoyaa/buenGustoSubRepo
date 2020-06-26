package com.utn.app.buenGusto.pais;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface PaisRepository extends JpaRepository<PaisEntity, Long> {
	
	@Query("SELECT c FROM PaisEntity c WHERE c.habilitado = ?1")
	public List<PaisEntity> findAllByHabilitado(boolean hab); 

}
