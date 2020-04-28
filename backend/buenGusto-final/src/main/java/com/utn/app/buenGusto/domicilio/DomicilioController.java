package com.utn.app.buenGusto.domicilio;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/domicilio")
public class DomicilioController extends CommonController<DomicilioDTO> {

	public DomicilioController(CommonIService<DomicilioDTO> servicio, DomicilioService dService) {
		super(servicio);
	}

}
