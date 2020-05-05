package com.utn.app.buenGusto.historicoEstado;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/historico_estado")
public class historicoEstadoController extends CommonController<historicoEstadoDTO>{
	public historicoEstadoController ( CommonIService<historicoEstadoDTO> servicio) {
		super(servicio);
	}
}
