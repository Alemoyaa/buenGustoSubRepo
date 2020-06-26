package com.utn.app.buenGusto.domicilio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface DomicilioRepository extends JpaRepository<DomicilioEntity, Long> {
	
	@Query("SELECT c FROM DomicilioEntity c WHERE c.habilitado = ?1")
	public List<DomicilioEntity> findAllByHabilitado(boolean hab); 
}
