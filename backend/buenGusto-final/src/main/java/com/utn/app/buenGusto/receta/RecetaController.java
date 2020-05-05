package com.utn.app.buenGusto.receta;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/receta")
public class RecetaController extends CommonController<RecetaDTO> {

	public RecetaController(CommonIService<RecetaDTO> service, RecetaService pservice) {
		super(service);
	}
}
