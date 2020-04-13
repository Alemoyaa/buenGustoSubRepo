package com.utn.app.buenGusto.articuloInsumo;
 
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.commons.commonController;
import com.utn.app.buenGusto.commons.commonIService; 

@RestController
@RequestMapping(path = "api/articulo_insumo")
public class articuloInsumoController extends commonController<articuloInsumoDTO>{
	
	private articuloInsumoService servicio;
	
	public articuloInsumoController(commonIService<articuloInsumoDTO> servicio, articuloInsumoService Aservicio) {
		super(servicio);
		this.servicio=Aservicio;
	}
	
}
