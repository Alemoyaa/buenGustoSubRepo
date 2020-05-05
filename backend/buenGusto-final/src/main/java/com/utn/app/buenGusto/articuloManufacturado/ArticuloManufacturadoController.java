package com.utn.app.buenGusto.articuloManufacturado;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/articulo_manufacturado")
public class ArticuloManufacturadoController extends CommonController<ArticuloManufacturadoDTO> {

	public ArticuloManufacturadoController(CommonIService<ArticuloManufacturadoDTO> service,
			ArticuloManufacturadoService Aservicio) {
		super(service);
	}

}
