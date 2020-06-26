package com.utn.app.buenGusto.pais;

import java.util.List;

import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class PaisService extends CommonService<PaisEntity, PaisRepository> {

	@Override
	public Iterable<PaisEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<PaisEntity> entityOptional;
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
