package com.utn.app.buenGusto.detallePedido;

import java.util.List;

import org.springframework.stereotype.Service;
import com.utn.app.buenGusto.common.CommonService;

@Service
public class DetallePedidoService extends CommonService<DetallePedidoEntity, DetallePedidoRepository> {

	@Override
	public Iterable<DetallePedidoEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<DetallePedidoEntity> entityOptional;
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
