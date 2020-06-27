package com.utn.app.buenGusto.configuracionGeneral;

import java.util.List;

import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class ConfiguracionGeneralService
		extends CommonService<ConfiguracionGeneralEntity, ConfiguracionGeneralRepository> {

	@Override
	public Iterable<ConfiguracionGeneralEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<ConfiguracionGeneralEntity> entityOptional;
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
