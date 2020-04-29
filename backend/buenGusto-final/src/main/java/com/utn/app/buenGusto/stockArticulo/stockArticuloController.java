package com.utn.app.buenGusto.stockArticulo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;
 
@RestController
@RequestMapping(path = "api/stock_articulo")
public class stockArticuloController extends CommonController<stockArticuloDTO>{

	public stockArticuloController(CommonIService<stockArticuloDTO> service) {
		super(service);
	}
	
}
