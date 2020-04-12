package com.utn.app.buenGusto.detallePedido;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.commons.commonController;
import com.utn.app.buenGusto.commons.commonIService;

@RestController
@CrossOrigin(origins = "*",
			 methods={RequestMethod.GET,RequestMethod.POST,
					  RequestMethod.DELETE,RequestMethod.PUT})
@RequestMapping(path = "api/detalle_pedido")
public class detallePedidoController extends commonController<detallePedidoDTO>{
	
	private detallePedidoService servicio;

	public detallePedidoController(commonIService<detallePedidoDTO> service,detallePedidoService dServicio) {
		super(service);
		this.servicio= dServicio;
	}
	

}
