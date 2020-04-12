package com.utn.app.buenGusto.configuracionGeneral;
 
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.commons.commonService;

@Service
public class configuracionGeneralService extends commonService<configuracionGeneralEntity, configuracionGeneralDTO>{
	
	@Autowired
	private configuracionGeneralRepository repository;
	
	public configuracionGeneralService(configuracionGeneralRepository configuracionRepository, ModelMapper modelMapper) {
		super(configuracionRepository, configuracionGeneralDTO.class,configuracionGeneralEntity.class, modelMapper);
		this.repository=configuracionRepository;
	}
}
