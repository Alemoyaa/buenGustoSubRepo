package com.utn.app.buenGusto.cabezaPedido;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CabezaPedidoRepository extends JpaRepository<CabezaPedidoEntity, Long>{

}
