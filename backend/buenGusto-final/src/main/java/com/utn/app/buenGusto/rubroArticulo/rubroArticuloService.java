package com.utn.app.buenGusto.rubroArticulo;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.commons.commonService;

@Service
public class rubroArticuloService extends commonService<rubroArticuloEntity, rubroArticuloDTO>{
	private rubroArticuloRepository repository;
	
	public rubroArticuloService(rubroArticuloRepository rubRepository, ModelMapper modelMapper) {
		super(rubRepository, rubroArticuloDTO.class, rubroArticuloEntity.class,modelMapper);
		this.repository=rubRepository;
	}
}
