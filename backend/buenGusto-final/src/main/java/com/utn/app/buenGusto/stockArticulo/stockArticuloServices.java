package com.utn.app.buenGusto.stockArticulo;

import org.modelmapper.ModelMapper; 
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class stockArticuloServices extends CommonService<stockArticuloEntity, stockArticuloDTO>{

	public stockArticuloServices(stockArticuloRepository repository, ModelMapper mMapper) {
		super(repository, stockArticuloDTO.class, stockArticuloEntity.class, mMapper); 
	}
	
}
