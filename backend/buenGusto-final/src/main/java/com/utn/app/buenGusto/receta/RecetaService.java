package com.utn.app.buenGusto.receta;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class RecetaService extends CommonService<RecetaEntity, RecetaDTO> {

	@Autowired
	private RecetaRepository repository;

	public RecetaService(RecetaRepository RecetaRepository, ModelMapper modelMapper) {
		super(RecetaRepository, RecetaDTO.class, RecetaEntity.class, modelMapper);
		this.repository = RecetaRepository;
	}
}
