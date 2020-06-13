package com.utn.app.buenGusto.detalleManufacturado;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
		RequestMethod.PUT })
@RequestMapping(path = "api/detalle_manufacturado")
public class DetalleManufacturadoController
		extends CommonController<DetalleManufacturadoEntity, DetalleManufacturadoService> {

}
