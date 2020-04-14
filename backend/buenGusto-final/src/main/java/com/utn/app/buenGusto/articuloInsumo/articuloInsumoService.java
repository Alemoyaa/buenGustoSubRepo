package com.utn.app.buenGusto.articuloInsumo;
  
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.commons.commonService;

@Service
public class articuloInsumoService extends commonService<articuloInsumoEntity, articuloInsumoDTO>{
	
	@Autowired
	private articuloInsumoRepository repository;
	
	public articuloInsumoService(articuloInsumoRepository Arepository,ModelMapper modelMapper) {
		super(Arepository, articuloInsumoDTO.class, articuloInsumoEntity.class, modelMapper );
		this.repository= Arepository;
	}
	
	
}
