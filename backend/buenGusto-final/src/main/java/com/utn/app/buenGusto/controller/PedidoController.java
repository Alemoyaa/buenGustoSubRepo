package com.utn.app.buenGusto.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.DTO.PedidoDTO;
import com.utn.app.buenGusto.services.CommonIService;
import com.utn.app.buenGusto.services.PedidoService;

@RestController
@RequestMapping(path = "api/pedido")
public class PedidoController extends CommonController<PedidoDTO>{
	
	private PedidoService servicio;

	public PedidoController(CommonIService<PedidoDTO> service, PedidoService pservice) {
		super(service);
		this.servicio=pservice;
	}
	
	
}
