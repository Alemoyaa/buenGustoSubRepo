package com.utn.app.buenGusto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.utn.app.buenGusto.common.EnvioEmail;

@SpringBootApplication
public class BuenGustoFinalApplication {

	public static void main(String[] args) {
		SpringApplication.run(BuenGustoFinalApplication.class, args);
		
		/*ApplicationContext context =
	            new ClassPathXmlApplicationContext("Spring-Mail.xml");

	    	EnvioEmail mm = (EnvioEmail) context.getBean("envioEmail");
	    	
	        mm.sendMail("luis_aruta@hotmail.com.ar", "Comprobante de compra", "Luis Aruta", "02/06/2020");*/
	}
	

}
