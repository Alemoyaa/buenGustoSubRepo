package com.utn.app.buenGusto.articuloManufacturadoDetalle;
 
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.commons.commonController; 

@RestController
@CrossOrigin(origins = "*",
			 methods={RequestMethod.GET,RequestMethod.POST,
					  RequestMethod.DELETE,RequestMethod.PUT})
@RequestMapping(path = "api/articulo_manufacturado_detalle")
public class articuloManufacturadoDetalleController extends commonController<articuloManufacturadoDetalleEntity, articuloManufacturadoDetalleService>{}
