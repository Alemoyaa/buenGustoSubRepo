package com.utn.app.buenGusto.articuloManufacturadoDetalle;
 
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.commons.commonService;

@Service
public class articuloManufacturadoDetalleService extends commonService<articuloManufacturadoDetalleEntity, articuloManufacturadoDetalleDTO>{
	@Autowired
	private articuloManufacturadoDetalleRepository repository;
	
	public articuloManufacturadoDetalleService(articuloManufacturadoDetalleRepository ArticuloManufacturadoDetalleRepository,ModelMapper modelMapper) {
		super(ArticuloManufacturadoDetalleRepository, articuloManufacturadoDetalleDTO.class, articuloManufacturadoDetalleEntity.class, modelMapper);
		this.repository= ArticuloManufacturadoDetalleRepository;
	}
}
