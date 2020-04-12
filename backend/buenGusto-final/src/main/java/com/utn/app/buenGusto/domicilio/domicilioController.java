package com.utn.app.buenGusto.domicilio;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.commons.commonController;
import com.utn.app.buenGusto.commons.commonIService;

@RestController

@RequestMapping(path = "api/domicilio")
public class domicilioController extends commonController<domicilioDTO>{
	private domicilioService servicio;

	public domicilioController(commonIService<domicilioDTO> service, domicilioService dService) {
		super(service);
		this.servicio=dService;
	}
	
	
}
