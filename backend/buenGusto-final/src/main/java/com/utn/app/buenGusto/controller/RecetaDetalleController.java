package com.utn.app.buenGusto.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.DTO.RecetaDetalleDTO;
import com.utn.app.buenGusto.services.CommonIService;
import com.utn.app.buenGusto.services.RecetaDetalleService;

@RestController
@RequestMapping(path = "api/receta_detalle")
public class RecetaDetalleController extends CommonController<RecetaDetalleDTO> {

	public RecetaDetalleController(CommonIService<RecetaDetalleDTO> service, RecetaDetalleService pservice) {
		super(service);
	}
}
