package com.utn.app.buenGusto.rubroArticulo;
 
import com.utn.app.buenGusto.commons.commonDTO;

public class rubroArticuloDTO extends commonDTO  {
	
	private static final long serialVersionUID = 1L;

	private String denominacion; 

	private rubroArticuloDTO padre;
	
	public String getDenominacion() {
		return denominacion;
	}
	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}
	public rubroArticuloDTO getPadre() {
		return padre;
	}
	public void setPadre(rubroArticuloDTO padre) {
		this.padre = padre;
	}

}
