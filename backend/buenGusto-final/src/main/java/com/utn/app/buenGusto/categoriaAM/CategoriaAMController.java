package com.utn.app.buenGusto.categoriaAM;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/categoria_am")
public class CategoriaAMController extends CommonController<CategoriaAMDTO>{

	public CategoriaAMController(CommonIService<CategoriaAMDTO> service) {
		super(service);
	}
	
}
