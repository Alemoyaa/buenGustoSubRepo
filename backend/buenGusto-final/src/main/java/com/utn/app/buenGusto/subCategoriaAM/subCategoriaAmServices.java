package com.utn.app.buenGusto.subCategoriaAM;

import org.modelmapper.ModelMapper; 
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class subCategoriaAmServices extends CommonService<subCategoriaAmEntity, subCategoriaAmDTO>{

	public subCategoriaAmServices(subCategoriaAmRepository repository, ModelMapper mMapper) {
		super(repository, subCategoriaAmDTO.class, subCategoriaAmEntity.class, mMapper); 
	}
	
}
