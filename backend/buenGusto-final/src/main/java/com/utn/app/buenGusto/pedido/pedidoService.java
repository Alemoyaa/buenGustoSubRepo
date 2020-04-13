package com.utn.app.buenGusto.pedido;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.commons.commonService;

@Service
public class pedidoService extends commonService<pedidoEntity, pedidoDTO>{
	
	@Autowired
	private pedidoRepository repository;
	
	public pedidoService(pedidoRepository prepository, ModelMapper modelMapper) {
		super(prepository, pedidoDTO.class,pedidoEntity.class,modelMapper);
		this.repository=prepository;
	}
}
