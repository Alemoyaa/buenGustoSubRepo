package com.utn.app.buenGusto.detallePago;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class DetallePagoService extends CommonService<DetallePagoEntity, DetallePagoDTO> {

	@Autowired
	private DetallePagoRepository repository;

	public DetallePagoService(DetallePagoRepository frepository, ModelMapper modelMapper) {
		super(frepository, DetallePagoDTO.class, DetallePagoEntity.class, modelMapper);
		this.repository = frepository;
	}
}
