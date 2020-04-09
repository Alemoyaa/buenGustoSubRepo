package com.utn.app.buenGusto.articuloManufacturadoDetalle;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface articuloManufacturadoDetalleRepository extends JpaRepository<articuloManufacturadoDetalleEntity, Long>{}
