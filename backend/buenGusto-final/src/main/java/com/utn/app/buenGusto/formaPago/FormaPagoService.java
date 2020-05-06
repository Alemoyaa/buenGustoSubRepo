package com.utn.app.buenGusto.formaPago;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class FormaPagoService extends CommonService<FormaPagoEntity, FormaPagoDTO> {

	@Autowired
	private FormaPagoRepository repository;

	public FormaPagoService(FormaPagoRepository frepository, ModelMapper modelMapper) {
		super(frepository, FormaPagoDTO.class, FormaPagoEntity.class, modelMapper);
		this.repository = frepository;
	}
}
