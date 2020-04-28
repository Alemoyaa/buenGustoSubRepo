package com.utn.app.buenGusto.detallePedido;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/detalle_pedido")
public class DetallePedidoController extends CommonController<DetallePedidoDTO> {

	public DetallePedidoController(CommonIService<DetallePedidoDTO> service, DetallePedidoService dServicio) {
		super(service);
	}

}
