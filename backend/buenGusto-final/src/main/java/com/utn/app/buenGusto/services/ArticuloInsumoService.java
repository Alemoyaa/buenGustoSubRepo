package com.utn.app.buenGusto.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.DTO.ArticuloInsumoDTO;
import com.utn.app.buenGusto.entities.ArticuloInsumoEntity;
import com.utn.app.buenGusto.repositories.ArticuloInsumoRepository;

@Service
public class ArticuloInsumoService extends CommonService<ArticuloInsumoEntity, ArticuloInsumoDTO> {

	@Autowired
	private ArticuloInsumoRepository repository;

	public ArticuloInsumoService(ArticuloInsumoRepository Arepository, ModelMapper modelMapper) {
		super(Arepository, ArticuloInsumoDTO.class, ArticuloInsumoEntity.class, modelMapper);
		this.repository = Arepository;
	}

}
