package com.utn.app.buenGusto.controller;
  
import org.springframework.web.bind.annotation.RequestMapping; 
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.DTO.ClienteDTO;
import com.utn.app.buenGusto.services.ClienteService;
import com.utn.app.buenGusto.services.CommonIService; 

@RestController
@RequestMapping(path = "api/cliente")
public class ClienteController extends CommonController<ClienteDTO>{
	
	private ClienteService servicio;
	
	public ClienteController( CommonIService<ClienteDTO> servicio, ClienteService cService) {
		super(servicio);
		this.servicio= cService;
	}
}
