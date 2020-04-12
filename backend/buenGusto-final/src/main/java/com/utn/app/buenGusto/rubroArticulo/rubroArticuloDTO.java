package com.utn.app.buenGusto.rubroArticulo;

import java.util.List;

import com.utn.app.buenGusto.commons.commonDTO;

public class rubroArticuloDTO extends commonDTO  {
	
	private String denominacion;
	private rubroArticuloEntity padre;
	private List<rubroArticuloEntity> hijos;
	
	
	
	public rubroArticuloDTO() {
		super();
	}
	public rubroArticuloDTO(String denominacion, rubroArticuloEntity padre, List<rubroArticuloEntity> hijos) {
		super();
		this.denominacion = denominacion;
		this.padre = padre;
		this.hijos = hijos;
	}
	public String getDenominacion() {
		return denominacion;
	}
	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}
	public rubroArticuloEntity getPadre() {
		return padre;
	}
	public void setPadre(rubroArticuloEntity padre) {
		this.padre = padre;
	}
	public List<rubroArticuloEntity> getHijos() {
		return hijos;
	}
	public void setHijos(List<rubroArticuloEntity> hijos) {
		this.hijos = hijos;
	}
	
	
	
	
}
