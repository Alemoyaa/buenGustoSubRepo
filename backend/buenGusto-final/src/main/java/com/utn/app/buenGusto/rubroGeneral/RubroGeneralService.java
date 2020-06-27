package com.utn.app.buenGusto.rubroGeneral;

import java.util.List;

import org.springframework.stereotype.Service;
import com.utn.app.buenGusto.common.CommonService;

@Service
public class RubroGeneralService extends CommonService<RubroGeneralEntity, RubroGeneralRepository> {

	@Override
	public Iterable<RubroGeneralEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<RubroGeneralEntity> entityOptional;
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
