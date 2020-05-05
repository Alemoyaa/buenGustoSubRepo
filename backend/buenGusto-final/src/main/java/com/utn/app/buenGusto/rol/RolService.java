package com.utn.app.buenGusto.rol;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class RolService extends CommonService<RolEntity, RolDTO> {

	@Autowired
	private RolRepository repository;

	public RolService(RolRepository RolRepository, ModelMapper modelMapper) {
		super(RolRepository, RolDTO.class, RolEntity.class, modelMapper);
		this.repository = RolRepository;
	}
}
