package com.utn.app.buenGusto.rubroGeneral;

import com.utn.app.buenGusto.commons.commonDTO;

public class rubroGeneralDTO extends commonDTO  {
	private String denominacion;
	
	

	public rubroGeneralDTO() {
		super();
	}

	public rubroGeneralDTO(String denominacion) {
		super();
		this.denominacion = denominacion;
	}

	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}
	
	
	
}
