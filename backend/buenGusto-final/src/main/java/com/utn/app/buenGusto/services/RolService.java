package com.utn.app.buenGusto.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.utn.app.buenGusto.DTO.RolDTO;
import com.utn.app.buenGusto.entities.RolEntity;
import com.utn.app.buenGusto.repositories.RolRepository;

@Service
public class RolService extends CommonService<RolEntity, RolDTO> {

	@Autowired
	private RolRepository repository;

	public RolService(RolRepository RolRepository, ModelMapper modelMapper) {
		super(RolRepository, RolDTO.class, RolEntity.class, modelMapper);
		this.repository = RolRepository;
	}
}
