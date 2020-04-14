package com.utn.app.buenGusto.rubroArticulo;

import java.util.List;

import com.utn.app.buenGusto.commons.commonDTO;

public class rubroArticuloDTO extends commonDTO  {
	
	private String denominacion; 
	public rubroArticuloDTO() {
		super();
	} 
	public String getDenominacion() {
		return denominacion;
	}
	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}  
}
