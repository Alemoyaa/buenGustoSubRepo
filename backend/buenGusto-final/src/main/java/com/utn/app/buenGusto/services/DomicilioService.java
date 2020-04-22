package com.utn.app.buenGusto.services;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.DTO.DomicilioDTO; 
import com.utn.app.buenGusto.entities.DomicilioEntity; 
import com.utn.app.buenGusto.repositories.DomicilioRepository;

@Service
public class DomicilioService extends CommonService<DomicilioEntity, DomicilioDTO>{
	
	private DomicilioRepository dr;
	
	public DomicilioService(DomicilioRepository domicilioRepository, ModelMapper modelMapper) {
		super(domicilioRepository, DomicilioDTO.class, DomicilioEntity.class, modelMapper);
		this.dr = domicilioRepository;
	}

	
}
