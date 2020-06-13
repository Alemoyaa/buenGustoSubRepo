package com.utn.app.buenGusto.pedido;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

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
			// entity.setLista_detallePedido(varOptional.get().getLista_detallePedido());

			entity.setClientePedido(varOptional.get().getClientePedido());

			return entity;

		} catch (Exception e) {

			throw new Exception(e.getMessage());
		}

	}

}
