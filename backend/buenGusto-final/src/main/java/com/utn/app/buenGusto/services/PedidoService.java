package com.utn.app.buenGusto.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.DTO.PedidoDTO;
import com.utn.app.buenGusto.entities.PedidoEntity;
import com.utn.app.buenGusto.repositories.PedidoRepository;

@Service
public class PedidoService extends CommonService<PedidoEntity, PedidoDTO> {

	@Autowired
	private PedidoRepository repository;

	public PedidoService(PedidoRepository prepository, ModelMapper modelMapper) {
		super(prepository, PedidoDTO.class, PedidoEntity.class, modelMapper);
		this.repository = prepository;
	}
}
