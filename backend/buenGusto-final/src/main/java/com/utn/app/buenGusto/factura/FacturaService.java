package com.utn.app.buenGusto.factura;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.utn.app.buenGusto.common.CommonService;
import com.utn.app.buenGusto.common.EnvioEmail;

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


	public FacturaEntity mandarEmail(MultipartFile file, long id) throws Exception {
		try {
			List<FacturaEntity> facturas = this.repository.findAll();
			int numero = facturas.get(facturas.size()-1).getNroFactura();
			numero++;
			FacturaEntity entity = this.repository.getOne(id);
			this.mandarEmail2(file, entity);
			return entity;
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}
	
	public void mandarEmail2(MultipartFile file, FacturaEntity factura) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Spring-Mail.xml");
		EnvioEmail mm = (EnvioEmail) context.getBean("envioEmail");
	    mm.sendMail("luis_aruta@hotmail.com.ar", "Comprobante de compra", "Luis Aruta", "02/06/2020", file);
	}
}
