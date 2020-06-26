package com.utn.app.buenGusto.factura;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FacturaRepository extends JpaRepository<FacturaEntity, Long> {
	
	@Query("SELECT c FROM FacturaEntity c WHERE c.habilitado = ?1")
	public List<FacturaEntity> findAllByHabilitado(boolean hab); 

}
