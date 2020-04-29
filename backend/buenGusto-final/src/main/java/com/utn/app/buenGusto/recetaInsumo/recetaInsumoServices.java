package com.utn.app.buenGusto.recetaInsumo;

import org.modelmapper.ModelMapper; 
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class recetaInsumoServices extends CommonService<recetaInsumoEntity, recetaInsumoDTO>{

	public recetaInsumoServices(recetaInsumoRepository repository, ModelMapper mMapper) {
		super(repository, recetaInsumoDTO.class, recetaInsumoEntity.class, mMapper);
	}
	
}
