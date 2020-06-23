package com.utn.app.buenGusto.articuloManufacturado;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticuloManufacturadoRepository extends JpaRepository<ArticuloManufacturadoEntity, Long> {

	/*
	 * @Query("SELECT * FROM articulo art,articulo_manufacturado artM WHERE artM.articulo_id = art.id"
	 * ) public List<ArticuloManufacturadoEntity> findAllM();
	 */

}
