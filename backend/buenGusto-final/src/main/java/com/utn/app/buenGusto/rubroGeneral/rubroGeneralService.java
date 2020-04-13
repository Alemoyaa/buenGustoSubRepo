package com.utn.app.buenGusto.rubroGeneral;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.commons.commonService;

@Service
public class rubroGeneralService extends commonService<rubroGeneralEntity, rubroGeneralDTO>{
	private rubroGeneralRepository repository;
	
	public rubroGeneralService(rubroGeneralRepository rubRepository, ModelMapper modelMapper) {
		super(rubRepository, rubroGeneralDTO.class, rubroGeneralEntity.class, modelMapper);
		this.repository= rubRepository;
	}
}
