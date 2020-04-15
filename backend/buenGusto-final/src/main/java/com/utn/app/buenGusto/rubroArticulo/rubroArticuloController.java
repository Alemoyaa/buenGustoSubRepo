package com.utn.app.buenGusto.rubroArticulo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.commons.commonController;
import com.utn.app.buenGusto.commons.commonIService;

@RestController
@RequestMapping(path = "api/rubro_articulo")
public class rubroArticuloController extends commonController<rubroArticuloDTO>{

	private rubroArticuloService servicio;

	public rubroArticuloController(commonIService<rubroArticuloDTO> service, rubroArticuloService rservicio) {
		super(service);
		this.servicio=rservicio;
	}
	
	
}
