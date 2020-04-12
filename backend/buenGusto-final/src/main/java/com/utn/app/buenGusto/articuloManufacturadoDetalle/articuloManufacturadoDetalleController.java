package com.utn.app.buenGusto.articuloManufacturadoDetalle;
 
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.commons.commonController;
import com.utn.app.buenGusto.commons.commonIService; 

@RestController

@RequestMapping(path = "api/articulo_manufacturado_detalle")
public class articuloManufacturadoDetalleController extends commonController<articuloManufacturadoDetalleDTO>{
	
	private articuloManufacturadoDetalleService servicio;

	public articuloManufacturadoDetalleController(commonIService<articuloManufacturadoDetalleDTO> service, articuloManufacturadoDetalleService Aservicio) {
		super(service);
		this.servicio= Aservicio;
	}

	

	
	
	
}
