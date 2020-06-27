package com.utn.app.buenGusto.localidad;

import java.util.List;

import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class LocalidadService extends CommonService<LocalidadEntity, LocalidadRepository> {

	@Override
	public Iterable<LocalidadEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<LocalidadEntity> entityOptional;
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
