package com.utn.app.buenGusto.factura;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/factura")
public class FacturaController extends CommonController<FacturaDTO> {

	public FacturaController(CommonIService<FacturaDTO> service, FacturaService fservice) {
		super(service);
	}

}
