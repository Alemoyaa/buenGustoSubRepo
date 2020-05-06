package com.utn.app.buenGusto.formaPago;

import com.utn.app.buenGusto.common.CommonDTO;

public class FormaPagoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String formaPago;
	private double montoDescuento;
	
	public String getFormaPago() {
		return formaPago;
	}
	public void setFormaPago(String formaPago) {
		this.formaPago = formaPago;
	}
	public double getMontoDescuento() {
		return montoDescuento;
	}
	public void setMontoDescuento(double montoDescuento) {
		this.montoDescuento = montoDescuento;
	}
	
}
