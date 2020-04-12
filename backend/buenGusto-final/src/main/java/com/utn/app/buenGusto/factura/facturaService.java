package com.utn.app.buenGusto.factura;
 
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.commons.commonService;

@Service
public class facturaService extends commonService<facturaEntity, facturaDTO>{
	
	private facturaRepository repository;
	
	public facturaService( facturaRepository frepository, ModelMapper modelMapper) {
		super(frepository, facturaDTO.class, facturaEntity.class,modelMapper);
		this.repository=frepository;
	}
}
