package com.utn.app.buenGusto.factura;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacturaRepository extends JpaRepository<FacturaEntity, Long>{}
