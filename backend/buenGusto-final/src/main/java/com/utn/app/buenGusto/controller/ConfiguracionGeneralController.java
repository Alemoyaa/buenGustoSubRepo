package com.utn.app.buenGusto.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.DTO.ConfiguracionGeneralDTO;
import com.utn.app.buenGusto.services.CommonIService;
import com.utn.app.buenGusto.services.ConfiguracionGeneralService;

@RestController
@RequestMapping(path = "api/configuracion_genereal")
public class ConfiguracionGeneralController extends CommonController<ConfiguracionGeneralDTO> {
	public ConfiguracionGeneralController(CommonIService<ConfiguracionGeneralDTO> servicio,
			ConfiguracionGeneralService cServicio) {
		super(servicio);
	}
}
