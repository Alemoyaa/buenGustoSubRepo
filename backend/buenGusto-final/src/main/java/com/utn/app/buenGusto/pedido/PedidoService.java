package com.utn.app.buenGusto.pedido;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.utn.app.buenGusto.common.CommonService;
import com.utn.app.buenGusto.estadoPedido.EstadoPedidoEntity;

@Service
public class PedidoService extends CommonService<PedidoEntity, PedidoRepository> {

	public PedidoDTO findByIdCortado(long id) throws Exception {

		try {
			Optional<PedidoEntity> varOptional = repository.findById(id);
			PedidoDTO entity = new PedidoDTO();
			entity.setId(varOptional.get().getId());
			entity.setFechaRealizacion(varOptional.get().getFechaRealizacion());
			entity.setHora_estimada_fin(varOptional.get().getHora_estimada_fin());
			entity.setTipo_Envio(varOptional.get().isTipo_Envio());
			entity.setNumero(varOptional.get().getNumero());

			entity.setEstadoPedido(varOptional.get().getEstadoPedido());
			entity.setLista_detallePedido(varOptional.get().getLista_detallePedido());

			entity.setClientePedido(varOptional.get().getClientePedido());

			return entity;

		} catch (Exception e) {

			throw new Exception(e.getMessage());
		}

	}

	public List<PedidoEntity> findPedidoEntreDosFechas(Date desde, Date hasta) throws Exception {
		try {
			List<PedidoEntity> varOptional = repository.findPedidoFechaDeterminada(desde, hasta);
			if (!varOptional.isEmpty())
				return varOptional;
			else
				return null;
		} catch (Exception e) {

			throw new Exception(e.getMessage());
		}
	}

	public PedidoEntity editarEstadoPedido(long id, EstadoPedidoEntity estado) throws Exception {
		try {
			Optional<PedidoEntity> varOptional = repository.findById(id);
			if (varOptional.isPresent()) {
				PedidoEntity entityNew = varOptional.get();
				entityNew.setEstadoPedido(estado);
				entityNew = repository.save(entityNew);
				return entityNew;
			}else {
				throw new Exception("No existe pedido");
			}
			
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	@Override
	public Iterable<PedidoEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<PedidoEntity> entityOptional;
		entityOptional = repository.findAllByHabilitado(habilitado);
		try {
			if (entityOptional != null) {
				return entityOptional;
			} else {
				return null;
			}
		} catch (Exception e) {
			throw new Exception();
		}
	}

	public PedidoEntity editarhoraEstimadaPedido(long id) throws Exception {
		try {
			Optional<PedidoEntity> varOptional = repository.findById(id);

			if (varOptional.isPresent()) {
				PedidoEntity entityNew = varOptional.get();
				entityNew = entityNew.agregarMinRetraso();
				entityNew = repository.save(entityNew);

				return entityNew;
			}else {
				throw new Exception("No existe pedido");
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public PedidoEntity descontarStockPedido(long id) throws Exception  {
		try {
			Optional<PedidoEntity> varOptional = repository.findById(id);

			if (varOptional.isPresent()) {

				PedidoEntity entityNew = varOptional.get();
				entityNew = entityNew.descontarStock();
				entityNew = repository.save(entityNew);

				return entityNew;
			}else {
				throw new Exception("No existe pedido");
			}
		} catch (Exception e) {
			throw new Exception("Error en pedidoService");
		}
	}
	
	
}
