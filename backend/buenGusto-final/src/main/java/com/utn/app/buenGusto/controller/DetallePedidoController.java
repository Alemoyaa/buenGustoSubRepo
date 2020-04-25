package com.utn.app.buenGusto.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.DTO.DetallePedidoDTO;
import com.utn.app.buenGusto.services.CommonIService;
import com.utn.app.buenGusto.services.DetallePedidoService;

@RestController
@RequestMapping(path = "api/detalle_pedido")
public class DetallePedidoController extends CommonController<DetallePedidoDTO> {

	public DetallePedidoController(CommonIService<DetallePedidoDTO> service, DetallePedidoService dServicio) {
		super(service);
	}

}
