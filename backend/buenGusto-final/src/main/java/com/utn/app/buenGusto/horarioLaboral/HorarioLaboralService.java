package com.utn.app.buenGusto.horarioLaboral;

import java.util.List;

import org.springframework.stereotype.Service;
import com.utn.app.buenGusto.common.CommonService;

@Service
public class HorarioLaboralService
		extends CommonService<HorarioLaboralEntity, HorarioLaboralRepository> {

	@Override
	public Iterable<HorarioLaboralEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<HorarioLaboralEntity> entityOptional;
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