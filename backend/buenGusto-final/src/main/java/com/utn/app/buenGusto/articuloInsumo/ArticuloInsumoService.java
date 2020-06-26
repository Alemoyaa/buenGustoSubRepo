package com.utn.app.buenGusto.articuloInsumo;

import java.util.List;

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

}
