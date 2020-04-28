package com.utn.app.buenGusto.cliente;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/cliente")
public class ClienteController extends CommonController<ClienteDTO> {

	public ClienteController(CommonIService<ClienteDTO> servicio, ClienteService cService) {
		super(servicio);
	}
}
