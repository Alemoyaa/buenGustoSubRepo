package com.utn.app.buenGusto.factura;

import java.util.List;

import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class FacturaService extends CommonService<FacturaEntity, FacturaRepository> {

	@Override
	public Iterable<FacturaEntity> findAllByHabilitado(boolean habilitado) throws Exception {
		List<FacturaEntity> entityOptional;
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

	@Override
	public FacturaEntity save(FacturaEntity entity) throws Exception {
		try {
			List<FacturaEntity> facturas = this.repository.findAll();
			int numero = facturas.get(facturas.size()-1).getNroFactura();
			numero++;
			entity.setNroFactura(numero);
			entity = repository.save(entity);
			return entity;
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}
}
