package com.utn.app.buenGusto.factura;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class FacturaService extends CommonService<FacturaEntity, FacturaDTO> {

	@Autowired
	private FacturaRepository repository;

	public FacturaService(FacturaRepository frepository, ModelMapper modelMapper) {
		super(frepository, FacturaDTO.class, FacturaEntity.class, modelMapper);
		this.repository = frepository;
	}
}
