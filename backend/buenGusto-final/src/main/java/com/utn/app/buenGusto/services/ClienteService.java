package com.utn.app.buenGusto.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.DTO.ClienteDTO;
import com.utn.app.buenGusto.entities.ClienteEntity;
import com.utn.app.buenGusto.repositories.ClienteRepository;

@Service
public class ClienteService extends CommonService<ClienteEntity, ClienteDTO> {

	@Autowired
	private ClienteRepository cr;

	public ClienteService(ClienteRepository ClienteRepository, ModelMapper modelMapper) {
		super(ClienteRepository, ClienteDTO.class, ClienteEntity.class, modelMapper);
		this.cr = ClienteRepository;
	}

}
