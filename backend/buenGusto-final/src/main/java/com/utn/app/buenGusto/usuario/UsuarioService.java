package com.utn.app.buenGusto.usuario;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class UsuarioService extends CommonService<UsuarioEntity, UsuarioDTO> {

	@Autowired
	private UsuarioRepository ur;

	public UsuarioService(UsuarioRepository UsuarioRepository, ModelMapper modelMapper) {
		super(UsuarioRepository, UsuarioDTO.class, UsuarioEntity.class, modelMapper);
		this.ur = UsuarioRepository;
	}

}
