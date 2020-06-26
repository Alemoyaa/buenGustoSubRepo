package com.utn.app.buenGusto.articuloManufacturado;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ArticuloManufacturadoRepository extends JpaRepository<ArticuloManufacturadoEntity, Long> {

	/*
	 * @Query("SELECT * FROM articulo art,articulo_manufacturado artM WHERE artM.articulo_id = art.id"
	 * ) public List<ArticuloManufacturadoEntity> findAllM();
	 */
	
	@Query("SELECT c FROM ArticuloManufacturadoEntity c WHERE c.habilitado = ?1")
	public List<ArticuloManufacturadoEntity> findAllByHabilitado(boolean hab); 

}
