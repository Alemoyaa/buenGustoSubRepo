package com.utn.app.buenGusto.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.DTO.ArticuloManufacturadoDTO;
import com.utn.app.buenGusto.entities.ArticuloManufacturadoEntity;
import com.utn.app.buenGusto.repositories.ArticuloManufacturadoRepository;

@Service
public class ArticuloManufacturadoService extends CommonService<ArticuloManufacturadoEntity, ArticuloManufacturadoDTO> {

	@Autowired
	private ArticuloManufacturadoRepository repository;

	public ArticuloManufacturadoService(ArticuloManufacturadoRepository artMRepository, ModelMapper modelMapper) {
		super(artMRepository, ArticuloManufacturadoDTO.class, ArticuloManufacturadoEntity.class, modelMapper);
		this.repository = artMRepository;
	}
}