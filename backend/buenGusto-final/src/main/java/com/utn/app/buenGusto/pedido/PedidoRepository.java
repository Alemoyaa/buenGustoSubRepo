package com.utn.app.buenGusto.pedido;

import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoRepository extends JpaRepository<PedidoEntity, Long> {
	
	@Query("SELECT p FROM PedidoEntity p WHERE p.fechaRealizacion BETWEEN :desde AND :hasta")
	public List<PedidoEntity> findPedidoFechaDeterminada(Date desde, Date hasta);
	
	@Query("SELECT c FROM PedidoEntity c WHERE c.habilitado = ?1")
	public List<PedidoEntity> findAllByHabilitado(boolean hab); 
	
	@Query("SELECT c FROM PedidoEntity c WHERE c.habilitado = ?1 AND c.estadoPedido.id = 4")
	public List<PedidoEntity> findAllPendientes(boolean hab); 
	 
}
