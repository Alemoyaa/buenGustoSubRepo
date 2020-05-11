package com.utn.app.buenGusto.detalleReceta;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.utn.app.buenGusto.common.CommonController;


@RestController
@CrossOrigin(origins = "*",
methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
@RequestMapping(path = "api/receta_detalle")
public class RecetaDetalleController extends CommonController<RecetaDetalleEntity, RecetaDetalleService> {

}
