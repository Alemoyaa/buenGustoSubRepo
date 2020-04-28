package com.utn.app.buenGusto.articuloInsumo;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class ArticuloInsumoService extends CommonService<ArticuloInsumoEntity, ArticuloInsumoDTO> {

	@Autowired
	private ArticuloInsumoRepository repository;

	public ArticuloInsumoService(ArticuloInsumoRepository Arepository, ModelMapper modelMapper) {
		super(Arepository, ArticuloInsumoDTO.class, ArticuloInsumoEntity.class, modelMapper);
		this.repository = Arepository;
	}

}
