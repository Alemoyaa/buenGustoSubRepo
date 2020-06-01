package com.utn.app.buenGusto.cabezaFactura;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CabezaFacturaRepository extends JpaRepository<CabezaFacturaEntity, Long>{

}
