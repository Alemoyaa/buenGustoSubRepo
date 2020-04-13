package com.utn.app.buenGusto;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BuenGustoFinalApplication {

	public static void main(String[] args) {
		SpringApplication.run(BuenGustoFinalApplication.class, args);
	}
	
	@Bean
	public ModelMapper modelMapper() {
	  return new ModelMapper();
	}

}
