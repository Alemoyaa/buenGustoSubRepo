package com.utn.app.buenGusto.articuloInsumo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ArticuloInsumoRepository extends JpaRepository<ArticuloInsumoEntity, Long> {
	
	@Query("SELECT c FROM ArticuloInsumoEntity c WHERE c.habilitado = ?1")
	public List<ArticuloInsumoEntity> findAllByHabilitado(boolean hab); 
}
