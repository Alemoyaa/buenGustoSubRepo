package com.utn.app.buenGusto.pedido;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.commons.commonController;
import com.utn.app.buenGusto.commons.commonIService;

@RestController

@RequestMapping(path = "api/pedido")
public class pedidoController extends commonController<pedidoDTO>{
	
	private pedidoService servicio;

	public pedidoController(commonIService<pedidoDTO> service, pedidoService pservice) {
		super(service);
		this.servicio=pservice;
	}
	
	
}
