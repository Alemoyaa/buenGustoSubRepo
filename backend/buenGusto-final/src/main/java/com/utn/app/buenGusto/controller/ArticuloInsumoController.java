package com.utn.app.buenGusto.controller;
  
import org.springframework.web.bind.annotation.RequestMapping; 
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.DTO.ArticuloInsumoDTO;
import com.utn.app.buenGusto.services.ArticuloInsumoService;
import com.utn.app.buenGusto.services.CommonIService; 

@RestController
@RequestMapping(path = "api/articulo_insumo")
public class ArticuloInsumoController extends CommonController<ArticuloInsumoDTO>{
	
	private ArticuloInsumoService servicio;
	
	public ArticuloInsumoController(CommonIService<ArticuloInsumoDTO> servicio, ArticuloInsumoService Aservicio) {
		super(servicio);
		this.servicio=Aservicio;
	}
	
}
