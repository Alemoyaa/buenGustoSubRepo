package com.utn.app.buenGusto.domicilio;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class DomicilioService extends CommonService<DomicilioEntity, DomicilioDTO> {

	@Autowired
	private DomicilioRepository dr;

	public DomicilioService(DomicilioRepository domicilioRepository, ModelMapper modelMapper) {
		super(domicilioRepository, DomicilioDTO.class, DomicilioEntity.class, modelMapper);
		this.dr = domicilioRepository;
	}

}
