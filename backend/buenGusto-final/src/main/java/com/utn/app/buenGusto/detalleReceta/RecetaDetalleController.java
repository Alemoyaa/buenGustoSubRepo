package com.utn.app.buenGusto.detalleReceta;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/receta_detalle")
public class RecetaDetalleController extends CommonController<RecetaDetalleDTO> {

	public RecetaDetalleController(CommonIService<RecetaDetalleDTO> service, RecetaDetalleService pservice) {
		super(service);
	}
}
