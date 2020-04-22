package com.utn.app.buenGusto.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.DTO.DomicilioDTO;
import com.utn.app.buenGusto.services.CommonIService;
import com.utn.app.buenGusto.services.DomicilioService;

@RestController
@RequestMapping(path = "api/domicilio")
public class DomicilioController extends CommonController<DomicilioDTO>{
	
	private DomicilioService servicio;
	
	public DomicilioController( CommonIService<DomicilioDTO> servicio, DomicilioService dService) {
		super(servicio);
		this.servicio=dService;
	}

}
