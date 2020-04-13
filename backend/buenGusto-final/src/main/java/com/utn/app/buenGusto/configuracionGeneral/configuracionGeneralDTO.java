package com.utn.app.buenGusto.configuracionGeneral;

import javax.validation.constraints.NotEmpty;

import com.utn.app.buenGusto.commons.commonDTO;

public class configuracionGeneralDTO extends commonDTO  {
	
	
	
	private int cantidadCocineros;

	
	private String emailEmpresa;
	
	
	
	

	public configuracionGeneralDTO() {
		super();
	}


	public configuracionGeneralDTO(int cantidadCocineros, String emailEmpresa) {
		super();
		this.cantidadCocineros = cantidadCocineros;
		this.emailEmpresa = emailEmpresa;
	}


	public int getCantidadCocineros() {
		return cantidadCocineros;
	}


	public void setCantidadCocineros(int cantidadCocineros) {
		this.cantidadCocineros = cantidadCocineros;
	}


	public String getEmailEmpresa() {
		return emailEmpresa;
	}


	public void setEmailEmpresa(String emailEmpresa) {
		this.emailEmpresa = emailEmpresa;
	}
	
	
	
}
