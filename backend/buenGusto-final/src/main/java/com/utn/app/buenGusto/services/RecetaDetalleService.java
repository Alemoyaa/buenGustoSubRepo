package com.utn.app.buenGusto.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.DTO.RecetaDetalleDTO;
import com.utn.app.buenGusto.entities.RecetaDetalleEntity;
import com.utn.app.buenGusto.repositories.RecetaDetalleRepository;

@Service
public class RecetaDetalleService extends CommonService<RecetaDetalleEntity, RecetaDetalleDTO>{

	@Autowired
	private RecetaDetalleRepository repository;
	
	public RecetaDetalleService(RecetaDetalleRepository rRepository, ModelMapper modelMapper) {
		super(rRepository, RecetaDetalleDTO.class, RecetaDetalleEntity.class, modelMapper);
		this.repository= rRepository;
	}
	
	
}
