package com.utn.app.buenGusto.DTO;

public class DomicilioDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;
	
	private String calle;
	private int numero;
	private String localidad;
	 

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
