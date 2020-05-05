package com.utn.app.buenGusto.rol;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/rol")
public class RolController extends CommonController<RolDTO> {

	public RolController(CommonIService<RolDTO> service, RolService rubServicio) {
		super(service);
	}

}
