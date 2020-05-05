package com.utn.app.buenGusto.historicoEstado;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class historicoEstadoServices extends CommonService<historicoEstadoEntity, historicoEstadoDTO>{

	public historicoEstadoServices (historicoEstadoRepository hRepository, ModelMapper modelMapper) {
		super(hRepository, historicoEstadoDTO.class, historicoEstadoEntity.class, modelMapper);
	}
	
}
