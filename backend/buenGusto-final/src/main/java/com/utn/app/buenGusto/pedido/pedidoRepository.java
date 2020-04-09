package com.utn.app.buenGusto.pedido;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface pedidoRepository extends JpaRepository<pedidoEntity, Long>{}
