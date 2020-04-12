package com.utn.app.buenGusto.detallePedido;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.commons.commonService;

@Service
public class detallePedidoService extends commonService<detallePedidoEntity, detallePedidoDTO>{
	
	@Autowired
	private detallePedidoRepository repository;
	
	public detallePedidoService(detallePedidoRepository detallePRepository, ModelMapper modelMapper) {
		super(detallePRepository, detallePedidoDTO.class, detallePedidoEntity.class,modelMapper);
		this.repository=detallePRepository;
	}
	
}
