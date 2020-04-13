package com.utn.app.buenGusto.factura;
 
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.commons.commonController;
import com.utn.app.buenGusto.commons.commonIService; 

@RestController
@RequestMapping(path = "api/factura")
public class facturaController extends commonController<facturaDTO>{
	private facturaService service;

	public facturaController(commonIService<facturaDTO> service, facturaService fservice) {
		super(service);
		this.service=fservice;
	}
	
	
}
