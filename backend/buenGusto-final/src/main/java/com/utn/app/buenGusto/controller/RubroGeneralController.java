package com.utn.app.buenGusto.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.DTO.RubroGeneralDTO;
import com.utn.app.buenGusto.services.CommonIService;
import com.utn.app.buenGusto.services.RubroGeneralService;

@RestController
@RequestMapping(path = "api/rubro_general")
public class RubroGeneralController extends CommonController<RubroGeneralDTO>{
	
	private RubroGeneralService servicio;

	public RubroGeneralController(CommonIService<RubroGeneralDTO> service, RubroGeneralService rubServicio) {
		super(service);
		this.servicio=rubServicio;
	}
	
	
}
