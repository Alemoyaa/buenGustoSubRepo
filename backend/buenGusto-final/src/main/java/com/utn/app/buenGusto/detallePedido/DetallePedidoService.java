package com.utn.app.buenGusto.detallePedido;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class DetallePedidoService extends CommonService<DetallePedidoEntity, DetallePedidoDTO> {

	@Autowired
	private DetallePedidoRepository repository;

	public DetallePedidoService(DetallePedidoRepository detallePRepository, ModelMapper modelMapper) {
		super(detallePRepository, DetallePedidoDTO.class, DetallePedidoEntity.class, modelMapper);
		this.repository = detallePRepository;
	}

}
