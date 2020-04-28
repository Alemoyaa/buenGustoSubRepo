package com.utn.app.buenGusto.configuracionGeneral;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/configuracion_genereal")
public class ConfiguracionGeneralController extends CommonController<ConfiguracionGeneralDTO> {
	public ConfiguracionGeneralController(CommonIService<ConfiguracionGeneralDTO> servicio,
			ConfiguracionGeneralService cServicio) {
		super(servicio);
	}
}
