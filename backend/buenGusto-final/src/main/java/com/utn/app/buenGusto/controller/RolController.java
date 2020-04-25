package com.utn.app.buenGusto.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.utn.app.buenGusto.DTO.RolDTO;
import com.utn.app.buenGusto.services.CommonIService;
import com.utn.app.buenGusto.services.RolService;

@RestController
@RequestMapping(path = "api/rol")
public class RolController extends CommonController<RolDTO> {

	public RolController(CommonIService<RolDTO> service, RolService rubServicio) {
		super(service);
	}

}
