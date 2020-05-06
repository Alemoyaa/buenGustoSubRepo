package com.utn.app.buenGusto.detallePago;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetallePagoRepository extends JpaRepository<DetallePagoEntity, Long>{}
