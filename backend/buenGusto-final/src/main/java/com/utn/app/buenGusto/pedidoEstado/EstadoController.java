package com.utn.app.buenGusto.pedidoEstado;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/estado")
public class EstadoController extends CommonController<EstadoDTO>{
	public EstadoController(CommonIService<EstadoDTO> services) {
		super(services);
	}
}
