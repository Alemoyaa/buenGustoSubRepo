package com.utn.app.buenGusto.cliente;
     
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.commons.commonService;

@Service
public class clienteService extends commonService<clienteEntity, clienteDTO> {

	@Autowired
	private clienteRepository cr;

	public clienteService(clienteRepository ClienteRepository, ModelMapper modelMapper) {
		super(ClienteRepository, clienteDTO.class, clienteEntity.class, modelMapper);
		this.cr = ClienteRepository;

	}

	public clienteDTO findByUidFirebase(String uid) throws Exception {

		clienteEntity entityOptional = cr.findByUidFirebase(uid);
		try {

			if (entityOptional != null) {
				return convertToDto(entityOptional);
			} else {
				throw new Exception();
			}

		} catch (Exception e) {
			throw new Exception();
		}

	}
}
