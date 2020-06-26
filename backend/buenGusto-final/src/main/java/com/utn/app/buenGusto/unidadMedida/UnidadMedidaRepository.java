package com.utn.app.buenGusto.unidadMedida;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface UnidadMedidaRepository extends JpaRepository<UnidadMedidaEntity, Long> {

	@Query("SELECT c FROM UnidadMedidaEntity c WHERE c.habilitado = ?1")
	public List<UnidadMedidaEntity> findAllByHabilitado(boolean hab); 
	
}
