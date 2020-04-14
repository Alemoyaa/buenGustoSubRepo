package com.utn.app.buenGusto.rubroArticulo;
 
import com.utn.app.buenGusto.commons.commonDTO;

public class rubroArticuloDTO extends commonDTO  {
	
	private static final long serialVersionUID = 1L;

	private String denominacion; 

	private rubroArticuloDTO padre;
	
	//private List<articuloInsumoDTO> articuloInsumo = new ArrayList<articuloInsumoDTO>();
	
	//private List<rubroArticuloDTO> hijo = new ArrayList<rubroArticuloDTO>();
	
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
	
	/*
	public List<articuloInsumoDTO> getArticuloInsumo() {
		return articuloInsumo;
	}
	public void setArticuloInsumo(List<articuloInsumoDTO> articuloInsumo) {
		this.articuloInsumo = articuloInsumo;
	}
	public List<rubroArticuloDTO> getHijo() {
		return hijo;
	}
	public void setHijo(List<rubroArticuloDTO> hijo) {
		this.hijo = hijo;
	}*/

}
