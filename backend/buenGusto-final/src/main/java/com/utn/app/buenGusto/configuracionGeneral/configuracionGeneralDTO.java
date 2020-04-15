package com.utn.app.buenGusto.configuracionGeneral;

import com.utn.app.buenGusto.commons.commonDTO;

public class configuracionGeneralDTO extends commonDTO  {
	
	private static final long serialVersionUID = 1L;

	private int cantidadCocineros;
	
	private String emailEmpresa; 


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
