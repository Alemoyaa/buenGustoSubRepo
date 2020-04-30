package com.utn.app.buenGusto.articuloInsumo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/articulo_insumo")
public class ArticuloInsumoController extends CommonController<ArticuloInsumoDTO> {

	public ArticuloInsumoController(CommonIService<ArticuloInsumoDTO> servicio) {
		super(servicio);
	}

}
