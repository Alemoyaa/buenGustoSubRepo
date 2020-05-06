package com.utn.app.buenGusto.detallePago;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/detallepago")
public class DetallePagoController extends CommonController<DetallePagoDTO> {

	public DetallePagoController(CommonIService<DetallePagoDTO> service, DetallePagoService fservice) {
		super(service);
	}

}
