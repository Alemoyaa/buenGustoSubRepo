package com.utn.app.buenGusto.detalleManufacturado;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetalleManufacturadoRepository extends JpaRepository<DetalleManufacturadoEntity, Long> {

}
