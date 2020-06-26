package com.utn.app.buenGusto.configuracionGeneral;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ConfiguracionGeneralRepository extends JpaRepository<ConfiguracionGeneralEntity, Long> {
	
	@Query("SELECT c FROM ConfiguracionGeneralEntity c WHERE c.habilitado = ?1")
	public List<ConfiguracionGeneralEntity> findAllByHabilitado(boolean hab); 
	

}
