package com.utn.app.buenGusto.domicilio;

import java.util.List;

import org.springframework.stereotype.Service;
import com.utn.app.buenGusto.common.CommonService;

@Service
public class DomicilioService extends CommonService<DomicilioEntity, DomicilioRepository> {

	@Override
	public Iterable<DomicilioEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<DomicilioEntity> entityOptional;
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
