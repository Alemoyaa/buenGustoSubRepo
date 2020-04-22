package com.utn.app.buenGusto.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.DTO.RubroGeneralDTO;
import com.utn.app.buenGusto.entities.RubroGeneralEntity;
import com.utn.app.buenGusto.repositories.RubroGeneralRepository;

@Service
public class RubroGeneralService extends CommonService<RubroGeneralEntity, RubroGeneralDTO> {

	@Autowired
	private RubroGeneralRepository repository;

	public RubroGeneralService(RubroGeneralRepository rubRepository, ModelMapper modelMapper) {
		super(rubRepository, RubroGeneralDTO.class, RubroGeneralEntity.class, modelMapper);
		this.repository = rubRepository;
	}
}
