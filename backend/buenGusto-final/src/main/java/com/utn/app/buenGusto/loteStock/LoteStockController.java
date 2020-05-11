package com.utn.app.buenGusto.loteStock;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.utn.app.buenGusto.common.CommonController;


@RestController
@CrossOrigin(origins = "*",
methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
@RequestMapping(path = "api/lote_stock")
public class LoteStockController extends CommonController<LoteStockEntity, LoteStockService> {

}
