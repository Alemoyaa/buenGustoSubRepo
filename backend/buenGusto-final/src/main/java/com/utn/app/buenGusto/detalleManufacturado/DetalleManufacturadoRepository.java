package com.utn.app.buenGusto.detalleManufacturado;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface DetalleManufacturadoRepository extends JpaRepository<DetalleManufacturadoEntity, Long> {

	@Query("SELECT c FROM DetalleManufacturadoEntity c WHERE c.habilitado = ?1")
	public List<DetalleManufacturadoEntity> findAllByHabilitado(boolean hab); 
	
}
