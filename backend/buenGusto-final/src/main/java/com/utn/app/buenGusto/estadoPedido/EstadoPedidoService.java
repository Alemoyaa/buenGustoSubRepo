package com.utn.app.buenGusto.estadoPedido;

import java.util.List;

import org.springframework.stereotype.Service;
import com.utn.app.buenGusto.common.CommonService;

@Service
public class EstadoPedidoService extends CommonService<EstadoPedidoEntity, EstadoPedidoRepository> {

	@Override
	public Iterable<EstadoPedidoEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<EstadoPedidoEntity> entityOptional;
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

}
