package com.utn.app.buenGusto.rubroGeneral;

import com.utn.app.buenGusto.commons.commonDTO;

public class rubroGeneralDTO extends commonDTO  {

	private static final long serialVersionUID = 1L;
	
	private String denominacion;
	  
	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	} 
}
