package com.utn.app.buenGusto.usuario;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/usuario")
public class UsuarioController extends CommonController<UsuarioDTO> {

	public UsuarioController(CommonIService<UsuarioDTO> servicio, UsuarioService cService) {
		super(servicio);
	}
}
