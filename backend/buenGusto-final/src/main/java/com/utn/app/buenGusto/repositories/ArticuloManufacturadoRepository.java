package com.utn.app.buenGusto.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.utn.app.buenGusto.entities.ArticuloManufacturadoEntity;

@Repository
public interface ArticuloManufacturadoRepository extends JpaRepository<ArticuloManufacturadoEntity, Long>{
	
	/*@Query("SELECT * FROM articulo art,articulo_manufacturado artM WHERE artM.articulo_id = art.id")
	public List<ArticuloManufacturadoEntity> findAllM();*/
	
}
