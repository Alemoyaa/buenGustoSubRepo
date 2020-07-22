package com.utn.app.buenGusto.factura;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
import com.utn.app.buenGusto.cliente.ClienteEntity;
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
	
	public FacturaEntity guardarYEnviar(FacturaEntity entity) {
		List<FacturaEntity> facturas = this.repository.findAll();
		int numero = facturas.get(facturas.size()-1).getNroFactura();
		numero++;
		entity.setNroFactura(numero);
		entity = repository.save(entity);
		
		try {
			this.mandarEmail(entity);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return entity;
	}


	public void mandarEmail(FacturaEntity factura) throws Exception {
		try {
			PDFGenerator thymeleaf2Pdf = new PDFGenerator();
	        String html = thymeleaf2Pdf.parseThymeleafTemplate(factura);
	        thymeleaf2Pdf.generatePdfFromHtml(factura.getNroFactura(), html);

	        ApplicationContext context = new ClassPathXmlApplicationContext("Spring-Mail.xml");
			EnvioEmail mm = (EnvioEmail) context.getBean("envioEmail");
			ClienteEntity cliente = factura.getPedidofacturado().getClientePedido();
			
			String pattern = "dd/MM/yyyy";
			DateFormat df = new SimpleDateFormat(pattern);      
			String FechaAsString = df.format(factura.getFecha());
			
			//mm.sendMail("luis_aruta@hotmail.com.ar", "Comprobante de compra", "Luis Aruta", "02/06/2020", "src/output/FacturaN°" + factura.getNroFactura() + ".pdf");
			mm.sendMail(cliente.getUsuario().getEmail(), "Comprobante de compra", cliente.getNombre()+" "+cliente.getApellido(), FechaAsString, "src/output/FacturaN°" + factura.getNroFactura() + ".pdf");
		    
			Path fileToDeletePath = Paths.get("src/output/FacturaN°" + factura.getNroFactura() + ".pdf");
		    Files.delete(fileToDeletePath);
		    
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

}
