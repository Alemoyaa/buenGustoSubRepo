package com.utn.app.buenGusto.subCategoriaAM;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/subcategoria_am")
public class subCategoriaAmController extends CommonController<subCategoriaAmDTO>{

	public subCategoriaAmController(CommonIService<subCategoriaAmDTO> service) {
		super(service);
	}
	
}
