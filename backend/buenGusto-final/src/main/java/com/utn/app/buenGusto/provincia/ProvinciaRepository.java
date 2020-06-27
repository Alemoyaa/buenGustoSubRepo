package com.utn.app.buenGusto.provincia;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface ProvinciaRepository extends JpaRepository<ProvinciaEntity, Long> {
	
	@Query("SELECT c FROM ProvinciaEntity c WHERE c.habilitado = ?1")
	public List<ProvinciaEntity> findAllByHabilitado(boolean hab); 
}
