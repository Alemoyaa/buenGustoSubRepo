package com.utn.app.buenGusto.subCategoriaAI;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class subCategoriaAiServices extends CommonService<subCategoriaAiEntity, subCategoriaAiDTO>{

	public subCategoriaAiServices(subCategoriaAiRepository repository,  ModelMapper mMapper) {
		super(repository, subCategoriaAiDTO.class, subCategoriaAiEntity.class, mMapper); 
	}

}
