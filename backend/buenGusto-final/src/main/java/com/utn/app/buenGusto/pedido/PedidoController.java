package com.utn.app.buenGusto.pedido;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/pedido")
public class PedidoController extends CommonController<PedidoDTO> {

	public PedidoController(CommonIService<PedidoDTO> service, PedidoService pservice) {
		super(service);
	}

}
