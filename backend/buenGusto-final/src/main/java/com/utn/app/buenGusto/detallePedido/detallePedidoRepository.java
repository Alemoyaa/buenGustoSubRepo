package com.utn.app.buenGusto.detallePedido;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface detallePedidoRepository extends JpaRepository<detallePedidoEntity, Long>{}
