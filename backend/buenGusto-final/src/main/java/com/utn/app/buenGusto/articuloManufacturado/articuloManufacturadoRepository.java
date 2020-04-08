package com.utn.app.buenGusto.articuloManufacturado;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface articuloManufacturadoRepository extends JpaRepository<articuloManufacturadoEntity, Long>{

}
