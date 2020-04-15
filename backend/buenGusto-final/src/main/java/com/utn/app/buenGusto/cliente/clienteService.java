package com.utn.app.buenGusto.cliente;
 
import org.modelmapper.ModelMapper; 
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.commons.commonService;

@Service
public class clienteService extends commonService<clienteEntity, clienteDTO>{

	private clienteRepository cr;
	
	public clienteService(clienteRepository ClienteRepository, ModelMapper modelMapper) {
		super(ClienteRepository, clienteDTO.class, clienteEntity.class, modelMapper);
		this.cr = ClienteRepository;
		
	}}
