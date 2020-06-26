package com.utn.app.buenGusto.datosEmpresa;

import java.util.List;

import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class DatosEmpresaService extends CommonService<DatosEmpresaEntity, DatosEmpresaRepository> {

	@Override
	public Iterable<DatosEmpresaEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<DatosEmpresaEntity> entityOptional;
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
