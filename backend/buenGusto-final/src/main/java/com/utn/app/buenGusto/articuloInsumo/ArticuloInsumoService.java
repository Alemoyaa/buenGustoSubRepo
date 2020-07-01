package com.utn.app.buenGusto.articuloInsumo;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class ArticuloInsumoService extends CommonService<ArticuloInsumoEntity, ArticuloInsumoRepository> {

	@Override
	public Iterable<ArticuloInsumoEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<ArticuloInsumoEntity> entityOptional;
		entityOptional = repository.findAllByHabilitado(habilitado);
		try {
			if (entityOptional != null) {
				return entityOptional;
			} else {
				return null;
			}
		} catch (Exception e) {
			throw new Exception();
		}
	}
	
	public ArticuloInsumoEntity reponerStockService(long id, double cantidad, double precioCompra) throws Exception {
		try {
			if (repository.existsById(id) == false) {
				throw new Exception("No value present");
			}
			Optional<ArticuloInsumoEntity> varOptional = repository.findById(id);
			ArticuloInsumoEntity entity = varOptional.get();
			entity.aumentarStock(cantidad, precioCompra);
			entity.setId(id);
			entity = repository.save(entity);
			return entity;
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}
	
	@Override
	public ArticuloInsumoEntity update(long id, ArticuloInsumoEntity entity) throws Exception {
		try {
			if (repository.existsById(id) == false) {
				throw new Exception("No value present");
			}
			entity.setId(id);
			if(entity.getUrl_imagen().isEmpty()) {
				entity.setUrl_imagen("https://www.industriasnelson.com.ar/wp-content/uploads/2019/03/sin-imagen-350x435.jpg");
			}
			entity = repository.save(entity);
			return entity;
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

}
