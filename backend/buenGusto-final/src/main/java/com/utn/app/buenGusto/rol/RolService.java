package com.utn.app.buenGusto.rol;

import java.util.List;
import org.springframework.stereotype.Service;
import com.utn.app.buenGusto.common.CommonService;

@Service
public class RolService extends CommonService<RolEntity, RolRepository> {

	@Override
	public Iterable<RolEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<RolEntity> entityOptional;
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
