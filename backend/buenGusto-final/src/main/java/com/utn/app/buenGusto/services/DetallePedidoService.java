package com.utn.app.buenGusto.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.DTO.DetallePedidoDTO;
import com.utn.app.buenGusto.entities.DetallePedidoEntity;
import com.utn.app.buenGusto.repositories.DetallePedidoRepository;

@Service
public class DetallePedidoService extends CommonService<DetallePedidoEntity, DetallePedidoDTO> {

	@Autowired
	private DetallePedidoRepository repository;

	public DetallePedidoService(DetallePedidoRepository detallePRepository, ModelMapper modelMapper) {
		super(detallePRepository, DetallePedidoDTO.class, DetallePedidoEntity.class, modelMapper);
		this.repository = detallePRepository;
	}

}
