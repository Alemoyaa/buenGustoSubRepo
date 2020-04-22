package com.utn.app.buenGusto.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.DTO.RecetaDTO;
import com.utn.app.buenGusto.entities.RecetaEntity;
import com.utn.app.buenGusto.repositories.RecetaRepository;

@Service
public class RecetaService extends CommonService<RecetaEntity, RecetaDTO> {

	@Autowired
	private RecetaRepository repository;

	public RecetaService(RecetaRepository RecetaRepository, ModelMapper modelMapper) {
		super(RecetaRepository, RecetaDTO.class, RecetaEntity.class, modelMapper);
		this.repository = RecetaRepository;
	}
}
