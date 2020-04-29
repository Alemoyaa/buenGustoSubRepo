package com.utn.app.buenGusto.subCategoriaAI;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/subcategoria_ai")
public class subCategoriaAiController extends CommonController<subCategoriaAiDTO>{

	public subCategoriaAiController(CommonIService<subCategoriaAiDTO> service) {
		super(service);
	}
	
}
