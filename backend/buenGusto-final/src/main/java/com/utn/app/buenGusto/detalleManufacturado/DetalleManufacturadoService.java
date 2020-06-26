package com.utn.app.buenGusto.detalleManufacturado;

import java.util.List;

import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class DetalleManufacturadoService
		extends CommonService<DetalleManufacturadoEntity, DetalleManufacturadoRepository> {

	@Override
	public Iterable<DetalleManufacturadoEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<DetalleManufacturadoEntity> entityOptional;
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
