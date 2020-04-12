package com.utn.app.buenGusto.rubroGeneral;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.commons.commonController;
import com.utn.app.buenGusto.commons.commonIService;

@RestController

@RequestMapping(path = "api/rubro_general")
public class rubroGeneralController extends commonController<rubroGeneralDTO>{
	
	private rubroGeneralService servicio;

	public rubroGeneralController(commonIService<rubroGeneralDTO> service, rubroGeneralService rubServicio) {
		super(service);
		this.servicio=rubServicio;
	}
	
	
}
