package com.utn.app.buenGusto.provincia;

import java.util.List;

import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class ProvinciaService extends CommonService<ProvinciaEntity, ProvinciaRepository> {

	@Override
	public Iterable<ProvinciaEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<ProvinciaEntity> entityOptional;
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
