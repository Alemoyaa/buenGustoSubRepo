package com.utn.app.buenGusto.domicilio;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.commons.commonService;

@Service
public class domicilioService extends commonService<domicilioEntity, domicilioDTO>{
	@Autowired
	private domicilioRepository repository;
	
	public domicilioService(domicilioRepository DomRepository,ModelMapper modelMapper){
		super(DomRepository, domicilioDTO.class,domicilioEntity.class, modelMapper);
		this.repository= DomRepository;
	}
}
