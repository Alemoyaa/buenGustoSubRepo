package com.utn.app.buenGusto.categoriaAM;

import org.modelmapper.ModelMapper; 
import org.springframework.stereotype.Service;
 
import com.utn.app.buenGusto.common.CommonService;

@Service
public class CategoriaAMServices extends CommonService<CategoriaAMEntity, CategoriaAMDTO>{

	public CategoriaAMServices(CategoriaAMRepository repository, ModelMapper mMapper) {
		super(repository, CategoriaAMDTO.class, CategoriaAMEntity.class, mMapper);
	}
	
}
