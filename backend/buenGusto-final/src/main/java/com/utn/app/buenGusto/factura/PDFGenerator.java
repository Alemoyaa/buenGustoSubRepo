package com.utn.app.buenGusto.factura;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;
import org.xhtmlrenderer.pdf.ITextRenderer;
import com.lowagie.text.DocumentException;

public class PDFGenerator {
	
	public String parseThymeleafTemplate(FacturaEntity factura) {
	    ClassLoaderTemplateResolver templateResolver = new ClassLoaderTemplateResolver();
	    templateResolver.setSuffix(".html");
	    templateResolver.setTemplateMode("HTML");
	    templateResolver.setCacheable(true);
	    templateResolver.setCacheTTLMs(3600000L);
	 
	    TemplateEngine templateEngine = new TemplateEngine();
	    templateEngine.setTemplateResolver(templateResolver);
	 
	    Context context = new Context();
	    context.setVariable("nombreE", factura.getDatosEmpresaID().getPropietario());
	    context.setVariable("razonSocialE", factura.getDatosEmpresaID().getRazonSocial());
	    String domicilioEmpresa = "Calle: "+factura.getDatosEmpresaID().getDomicilio().getCalle() + " " + factura.getDatosEmpresaID().getDomicilio().getNumero(); 
	    context.setVariable("direccionE", domicilioEmpresa);
	    context.setVariable("ciudadE", factura.getDatosEmpresaID().getDomicilio().getLocalidad().getNombre());
	    context.setVariable("telefonoE", factura.getDatosEmpresaID().getTelefono());
	    
	    context.setVariable("tipoFactura", factura.getTipoFactura());
	    context.setVariable("fecha", factura.getFecha());
	    context.setVariable("numerof", factura.getNroFactura());
	    
	    context.setVariable("nombreC", factura.getPedidofacturado().getClientePedido().getNombre()+ " "+ factura.getPedidofacturado().getClientePedido().getApellido());
	    //context.setVariable("direccionC", factura.getPedidofacturado().getClientePedido());
	    context.setVariable("direccionC", "Bordin 126");
	    context.setVariable("ciudadC", "Maipu");
	    context.setVariable("telefonoC", factura.getPedidofacturado().getClientePedido().getTelefono());
	    
	    String metodoEnvio = "Delivery";
	    if(!factura.getPedidofacturado().isTipo_Envio()) {
	    	metodoEnvio = "A retirar";
	    }
	    context.setVariable("envio", metodoEnvio);
	    context.setVariable("fechaEntrega", factura.getFecha());
	    context.setVariable("condPago", factura.getFormaPago());
	    
	    String numeroTar = "-";
	    if(factura.getFormaPago().equals("Tarjeta")) {
	    	numeroTar = factura.getNroTarjeta();
	    }
	    context.setVariable("numeroTarjeta", numeroTar);
	    
	    
	    List<DetalleFacturaModelo> lista = new ArrayList<DetalleFacturaModelo>();
	    factura.getDetalleFactura().forEach((detalle)-> {
	    	DetalleFacturaModelo detalleNuevo = new DetalleFacturaModelo();
	    	detalleNuevo.setCantidad(detalle.getCantidad());
	    	if(detalle.isEsInsumo()) {
	    		detalleNuevo.setDescripcion(detalle.getArticuloInsumo().getDenominacion());
		    	detalleNuevo.setIdArticulo(detalle.getArticuloInsumo().getId());
		    	detalleNuevo.setPrecioUnitario(detalle.getArticuloInsumo().getPrecio_de_venta());
	    	}else {
	    		detalleNuevo.setDescripcion(detalle.getArticuloManufacturado().getDenominacion());
		    	detalleNuevo.setIdArticulo(detalle.getArticuloManufacturado().getId());
		    	detalleNuevo.setPrecioUnitario(detalle.getArticuloManufacturado().getPrecio_de_venta());
	    	}
	    	double descuento = 0.0d;
	    	double subtotal = detalle.getSubtotal();
	    	if(factura.getFormaPago().equals("Contado")) {
	    		descuento = subtotal*0.1;
	    	}
	    	detalleNuevo.setDescuento(descuento);
	    	detalleNuevo.setSubtotal(subtotal - descuento);
	    	lista.add(detalleNuevo);
	    });
	    
	    context.setVariable("detalles", lista);
	   
	    double descuentoTotal = this.calcularDescuentoTotal(lista);
	    
	    context.setVariable("descuentoTotal", descuentoTotal);
	    context.setVariable("total", factura.calcularTotalFactura()-descuentoTotal);
	    
	    return templateEngine.process("/templates/thymeleaf_template", context);
	}
	
	public void generatePdfFromHtml(long numeroFactura, String html) throws DocumentException, IOException {
		String output = "src/output/FacturaN°" + numeroFactura + ".pdf";
	    OutputStream outputStream = new FileOutputStream(output);
	    ITextRenderer renderer = new ITextRenderer();
	    renderer.setDocumentFromString(html);
	    renderer.layout();
	    renderer.createPDF(outputStream);
	    outputStream.close();
	}
	
	public double calcularDescuentoTotal(List<DetalleFacturaModelo> lista) {
		double resultado = 0.0d;
		for(int i=0; i<=lista.size()-1; i++) {
			resultado += lista.get(i).getDescuento();
		}
		return resultado;
	}
}
