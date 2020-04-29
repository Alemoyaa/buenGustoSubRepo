package com.utn.app.buenGusto.loteStock;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;
 
@RestController
@RequestMapping(path = "api/lote_stock")
public class loteStockController extends CommonController<loteStockDTO>{

	public loteStockController(CommonIService<loteStockDTO> service) {
		super(service);
	}
	
}
