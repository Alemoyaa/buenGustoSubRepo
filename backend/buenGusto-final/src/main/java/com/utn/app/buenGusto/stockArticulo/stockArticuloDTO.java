package com.utn.app.buenGusto.stockArticulo;

import com.utn.app.buenGusto.common.CommonDTO;

public class stockArticuloDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private double costoActual;

	private double stockActual;

	private double stockMinimo;

	private double stockMaximo;

	private String unidadMedida;

	public double getCostoActual() {
		return costoActual;
	}

	public void setCostoActual(double costoActual) {
		this.costoActual = costoActual;
	}

	public double getStockActual() {
		return stockActual;
	}

	public void setStockActual(double stockActual) {
		this.stockActual = stockActual;
	}

	public double getStockMinimo() {
		return stockMinimo;
	}

	public void setStockMinimo(double stockMinimo) {
		this.stockMinimo = stockMinimo;
	}

	public double getStockMaximo() {
		return stockMaximo;
	}

	public void setStockMaximo(double stockMaximo) {
		this.stockMaximo = stockMaximo;
	}

	public String getUnidadMedida() {
		return unidadMedida;
	}

	public void setUnidadMedida(String unidadMedida) {
		this.unidadMedida = unidadMedida;
	}

}
