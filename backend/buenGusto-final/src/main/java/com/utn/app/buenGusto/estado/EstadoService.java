package com.utn.app.buenGusto.estado;

import org.modelmapper.ModelMapper; 
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class EstadoService extends CommonService<EstadoEntity, EstadoDTO>{

	public EstadoService(EstadoRepository EstadoRepository, ModelMapper modelMapper) {
		super(EstadoRepository, EstadoDTO.class, EstadoEntity.class, modelMapper);
	} 
	
}
