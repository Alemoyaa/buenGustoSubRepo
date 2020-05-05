package com.utn.app.buenGusto.loteStock;

import org.modelmapper.ModelMapper; 
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class loteStockServices extends CommonService<loteStockEntity, loteStockDTO>{

	public loteStockServices(loteStockRepository repository, ModelMapper mMapper) {
		super(repository, loteStockDTO.class, loteStockEntity.class, mMapper); 
	}
	
}
