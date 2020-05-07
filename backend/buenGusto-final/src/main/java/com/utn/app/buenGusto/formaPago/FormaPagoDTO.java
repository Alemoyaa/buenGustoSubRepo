package com.utn.app.buenGusto.formaPago;

import com.utn.app.buenGusto.common.CommonDTO;

public class FormaPagoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String nombreForma;
	private double montoDescuento;
	
	
	public String getNombreForma() {
		return nombreForma;
	}
	public void setNombreForma(String nombreForma) {
		this.nombreForma = nombreForma;
	}
	public double getMontoDescuento() {
		return montoDescuento;
	}
	public void setMontoDescuento(double montoDescuento) {
		this.montoDescuento = montoDescuento;
	}
	
}
