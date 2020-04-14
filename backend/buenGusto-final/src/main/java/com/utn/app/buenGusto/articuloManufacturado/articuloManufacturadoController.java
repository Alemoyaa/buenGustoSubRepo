package com.utn.app.buenGusto.articuloManufacturado;
  
import org.springframework.web.bind.annotation.RequestMapping; 
import org.springframework.web.bind.annotation.RestController;
 
import com.utn.app.buenGusto.commons.commonController;
import com.utn.app.buenGusto.commons.commonIService; 

@RestController 
@RequestMapping(path = "api/articulo_manufacturado")
public class articuloManufacturadoController extends commonController<articuloManufacturadoDTO>{
	
	private articuloManufacturadoService servicio;

	public articuloManufacturadoController(commonIService<articuloManufacturadoDTO> service, articuloManufacturadoService Aservicio) {
		super(service);
		this.servicio = Aservicio;
	}
	
	
	
}
