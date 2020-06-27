package com.utn.app.buenGusto.articulo;

import java.util.List;

import org.springframework.stereotype.Service;
import com.utn.app.buenGusto.common.CommonService;

@Service
public class ArticuloService extends CommonService<ArticuloEntity, ArticuloRepository> {

	@Override
	public Iterable<ArticuloEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<ArticuloEntity> entityOptional;
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
