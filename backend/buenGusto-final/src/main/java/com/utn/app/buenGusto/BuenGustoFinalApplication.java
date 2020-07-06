package com.utn.app.buenGusto;

import com.lowagie.text.DocumentException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.lowagie.text.DocumentException;
import com.utn.app.buenGusto.common.EnvioEmail;
import com.utn.app.buenGusto.factura.PDFGenerator;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

@SpringBootApplication
public class BuenGustoFinalApplication {

	public static void main(String[] args) throws IOException, DocumentException {
		//SpringApplication.run(BuenGustoFinalApplication.class, args);
		
		/*ApplicationContext context =
	            new ClassPathXmlApplicationContext("Spring-Mail.xml");

	    	EnvioEmail mm = (EnvioEmail) context.getBean("envioEmail");
	    	
	        mm.sendMail("luis_aruta@hotmail.com.ar", "Comprobante de compra", "Luis Aruta", "02/06/2020");*/
		
		PDFGenerator thymeleaf2Pdf = new PDFGenerator();
        String html = thymeleaf2Pdf.parseThymeleafTemplate();
        thymeleaf2Pdf.generatePdfFromHtml(html);
		
	}
	

}
