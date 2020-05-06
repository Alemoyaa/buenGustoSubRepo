package com.utn.app.buenGusto.formaPago;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/formapago")
public class FormaPagoController extends CommonController<FormaPagoDTO> {

	public FormaPagoController(CommonIService<FormaPagoDTO> service, FormaPagoService fservice) {
		super(service);
	}

}
