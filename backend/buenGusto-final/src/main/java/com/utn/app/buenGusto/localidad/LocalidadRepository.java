package com.utn.app.buenGusto.localidad;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface LocalidadRepository extends JpaRepository<LocalidadEntity, Long> {
	
	@Query("SELECT c FROM LocalidadEntity c WHERE c.habilitado = ?1")
	public List<LocalidadEntity> findAllByHabilitado(boolean hab); 

}
