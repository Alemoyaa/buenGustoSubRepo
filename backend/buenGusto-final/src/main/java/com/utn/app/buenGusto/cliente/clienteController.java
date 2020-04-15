package com.utn.app.buenGusto.cliente;
  
import org.springframework.web.bind.annotation.RequestMapping; 
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.commons.commonController;
import com.utn.app.buenGusto.commons.commonIService; 

@RestController
@RequestMapping(path = "api/cliente")
public class clienteController extends commonController<clienteDTO>{
	
	private clienteService servicio;
	
	public clienteController( commonIService<clienteDTO> servicio, clienteService cService) {
		super(servicio);
		this.servicio= cService;
	}
}
