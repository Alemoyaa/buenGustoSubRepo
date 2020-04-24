package com.utn.app.buenGusto.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.DTO.ArticuloManufacturadoDTO;
import com.utn.app.buenGusto.services.ArticuloManufacturadoService;
import com.utn.app.buenGusto.services.CommonIService;

@RestController
@RequestMapping(path = "api/articulo_manufacturado")
public class ArticuloManufacturadoController extends CommonController<ArticuloManufacturadoDTO> {

	private ArticuloManufacturadoService servicio;

	public ArticuloManufacturadoController(CommonIService<ArticuloManufacturadoDTO> service,
			ArticuloManufacturadoService Aservicio) {
		super(service);
		this.servicio = Aservicio;
	}

}
