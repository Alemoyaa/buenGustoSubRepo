package com.utn.app.buenGusto.categoriaAI;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.common.CommonIService;

@RestController
@RequestMapping(path = "api/categoria_ai")
public class CategoriaAIController extends CommonController<CategoriaAIDTO>{
	public CategoriaAIController(CommonIService<CategoriaAIDTO> services) {
		super(services);
	}
}
