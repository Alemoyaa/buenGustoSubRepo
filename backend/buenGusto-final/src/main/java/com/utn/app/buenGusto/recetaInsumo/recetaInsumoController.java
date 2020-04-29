package com.utn.app.buenGusto.recetaInsumo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/receta_insumo")
public class recetaInsumoController extends CommonController<recetaInsumoDTO>{

	public recetaInsumoController(CommonIService<recetaInsumoDTO> service) {
		super(service);
	}
	
}
