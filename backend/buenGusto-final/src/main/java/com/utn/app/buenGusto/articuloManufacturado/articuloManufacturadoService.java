package com.utn.app.buenGusto.articuloManufacturado;
 
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.commons.commonService;

@Service
public class articuloManufacturadoService extends commonService<articuloManufacturadoEntity, articuloManufacturadoDTO>{
	@Autowired
	private articuloManufacturadoRepository repository;

	public articuloManufacturadoService(articuloManufacturadoRepository artMRepository, ModelMapper modelMapper) {
		super(artMRepository, articuloManufacturadoDTO.class, articuloManufacturadoEntity.class, modelMapper);
		this.repository= artMRepository;
	}
	
	
	
}
