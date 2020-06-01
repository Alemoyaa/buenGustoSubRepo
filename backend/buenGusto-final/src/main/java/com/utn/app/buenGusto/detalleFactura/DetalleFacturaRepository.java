package com.utn.app.buenGusto.detalleFactura;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetalleFacturaRepository extends JpaRepository<DetalleFacturaEntity, Long>{

}
