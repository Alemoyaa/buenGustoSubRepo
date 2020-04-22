package com.utn.app.buenGusto.services;
 
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.DTO.FacturaDTO;
import com.utn.app.buenGusto.entities.FacturaEntity;
import com.utn.app.buenGusto.repositories.FacturaRepository;

@Service
public class FacturaService extends CommonService<FacturaEntity, FacturaDTO>{
	
	private FacturaRepository repository;
	
	public FacturaService( FacturaRepository frepository, ModelMapper modelMapper) {
		super(frepository, FacturaDTO.class, FacturaEntity.class,modelMapper);
		this.repository=frepository;
	}
}
