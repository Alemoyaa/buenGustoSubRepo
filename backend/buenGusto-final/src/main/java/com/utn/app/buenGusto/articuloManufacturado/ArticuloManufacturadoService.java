package com.utn.app.buenGusto.articuloManufacturado;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class ArticuloManufacturadoService extends CommonService<ArticuloManufacturadoEntity, ArticuloManufacturadoDTO> {
	
	@Autowired
	private ArticuloManufacturadoRepository repository;

	public ArticuloManufacturadoService(ArticuloManufacturadoRepository artMRepository, ModelMapper modelMapper) {
		super(artMRepository, ArticuloManufacturadoDTO.class, ArticuloManufacturadoEntity.class, modelMapper);
		this.repository = artMRepository;
	}
	
	/*
	public List<ArticuloManufacturadoDTO> findAllM() throws Exception{
		
		List<ArticuloManufacturadoEntity> entityOptional = repository.findAllM();
		List<ArticuloManufacturadoDTO> listaReturn = new ArrayList();
		
		try {
			if(entityOptional != null) {
			    for (ArticuloManufacturadoEntity i : entityOptional) {
			    	
			    	ArticuloManufacturadoDTO dto = new ArticuloManufacturadoDTO();
			    	dto.setDenominacion(i.getArticulo().getDenominacion());
			    	dto.setPrecioVenta(i.getArticulo().getPrecioventa());
			    	dto.setTiempoEstimadoCocina(i.getTiempoEstimadoCocina());
			    	dto.set_urlImagen(i.get_urlImagen());
			    	listaReturn.add(dto);
			    }
			    return listaReturn;
			}else {
				throw new Exception();
			}
		}
		catch (Exception e){
			throw new Exception();
		}
	}*/

}