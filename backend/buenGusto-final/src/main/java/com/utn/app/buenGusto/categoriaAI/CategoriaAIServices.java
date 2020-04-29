package com.utn.app.buenGusto.categoriaAI;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class CategoriaAIServices extends CommonService<CategoriaAIEntity, CategoriaAIDTO>{

	public CategoriaAIServices(CategoriaAIRepository repository, ModelMapper mMapper) {
		super(repository, CategoriaAIDTO.class, CategoriaAIEntity.class, mMapper); 
	}

}
