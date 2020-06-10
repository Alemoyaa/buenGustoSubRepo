package com.utn.app.buenGusto.estadoPedido;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstadoPedidoRepository extends JpaRepository<EstadoPedidoEntity, Long>{

}
