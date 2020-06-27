package com.utn.app.buenGusto.estadoPedido;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface EstadoPedidoRepository extends JpaRepository<EstadoPedidoEntity, Long> {
	
	@Query("SELECT c FROM EstadoPedidoEntity c WHERE c.habilitado = ?1")
	public List<EstadoPedidoEntity> findAllByHabilitado(boolean hab); 

}
