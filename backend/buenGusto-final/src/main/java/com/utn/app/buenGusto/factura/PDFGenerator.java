package com.utn.app.buenGusto.factura;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;
import org.xhtmlrenderer.pdf.ITextRenderer;
import com.lowagie.text.DocumentException;

public class PDFGenerator {
	
	public String parseThymeleafTemplate() {
	    ClassLoaderTemplateResolver templateResolver = new ClassLoaderTemplateResolver();
	    templateResolver.setSuffix(".html");
	    //templateResolver.setTemplateMode(TemplateMode.HTML);
	    templateResolver.setTemplateMode("HTML5");
	    templateResolver.setCacheable(true);
	    templateResolver.setCacheTTLMs(3600000L);
	 
	    TemplateEngine templateEngine = new TemplateEngine();
	    templateEngine.setTemplateResolver(templateResolver);
	 
	    Context context = new Context();
	    context.setVariable("to", "Baeldung");
	 
	    return templateEngine.process("thymeleaf_template", context);
	}
	
	public void generatePdfFromHtml(String html) throws DocumentException, IOException {
	    String outputFolder = System.getProperty("user.home") + File.separator + "thymeleaf.pdf";
	    OutputStream outputStream = new FileOutputStream(outputFolder);
	 
	    ITextRenderer renderer = new ITextRenderer();
	    renderer.setDocumentFromString(html);
	    renderer.layout();
	    renderer.createPDF(outputStream);
	 
	    outputStream.close();
	}
}
