package com.utn.app.buenGusto.categoria;

import java.util.List;

import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class CategoriaService extends CommonService<CategoriaEntity, CategoriaRepository> {

	@Override
	public Iterable<CategoriaEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<CategoriaEntity> entityOptional;
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
