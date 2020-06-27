package com.utn.app.buenGusto.unidadMedida;

import java.util.List;

import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class UnidadMedidaService extends CommonService<UnidadMedidaEntity, UnidadMedidaRepository> {

	@Override
	public Iterable<UnidadMedidaEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<UnidadMedidaEntity> entityOptional;
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
