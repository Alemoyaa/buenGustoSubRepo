package com.utn.app.buenGusto.DTO;

public class RubroGeneralDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String denominacion;

	// private RubroGeneralDTO rubroPadre;

	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}

	/*
	 * public RubroGeneralDTO getRubroPadre() { return rubroPadre; }
	 * 
	 * public void setRubroPadre(RubroGeneralDTO rubroPadre) { this.rubroPadre =
	 * rubroPadre; }
	 */

}
