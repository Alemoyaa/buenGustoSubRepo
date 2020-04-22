package com.utn.app.buenGusto.DTO;

public class ConfiguracionGeneralDTO extends CommonDTO  {
	
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
