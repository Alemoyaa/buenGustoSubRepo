package com.utn.app.buenGusto.domicilio;

import com.utn.app.buenGusto.commons.commonDTO;

public class domicilioDTO extends commonDTO  {
	private String calle; 
	private int numero; 
	private String localidad;
	
	
	
	
	public domicilioDTO() {
		super();
	}
	public domicilioDTO(String calle, int numero, String localidad) {
		super();
		this.calle = calle;
		this.numero = numero;
		this.localidad = localidad;
	}
	public String getCalle() {
		return calle;
	}
	public void setCalle(String calle) {
		this.calle = calle;
	}
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	public String getLocalidad() {
		return localidad;
	}
	public void setLocalidad(String localidad) {
		this.localidad = localidad;
	} 
	
	
	
	
}
