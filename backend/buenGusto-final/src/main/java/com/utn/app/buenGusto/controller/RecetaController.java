package com.utn.app.buenGusto.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.DTO.RecetaDTO;
import com.utn.app.buenGusto.services.RecetaService;
import com.utn.app.buenGusto.services.CommonIService;

@RestController
@RequestMapping(path = "api/receta")
public class RecetaController extends CommonController<RecetaDTO> {

	public RecetaController(CommonIService<RecetaDTO> service, RecetaService pservice) {
		super(service);
	}
}
