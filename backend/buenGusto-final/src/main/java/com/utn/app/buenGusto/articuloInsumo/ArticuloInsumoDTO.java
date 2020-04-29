package com.utn.app.buenGusto.articuloInsumo;

import java.sql.Date;

import com.utn.app.buenGusto.articulo.ArticuloDTO;
import com.utn.app.buenGusto.common.CommonDTO;

public class ArticuloInsumoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String denominacion;
	
	private double precioDeVenta;
	
	private double costoDeVenta;
	
	private boolean requiereRefrigeracion;
	
	private Date fechaBaja;

	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}

	public double getPrecioDeVenta() {
		return precioDeVenta;
	}

	public void setPrecioDeVenta(double precioDeVenta) {
		this.precioDeVenta = precioDeVenta;
	}

	public double getCostoDeVenta() {
		return costoDeVenta;
	}

	public void setCostoDeVenta(double costoDeVenta) {
		this.costoDeVenta = costoDeVenta;
	}

	public boolean isRequiereRefrigeracion() {
		return requiereRefrigeracion;
	}

	public void setRequiereRefrigeracion(boolean requiereRefrigeracion) {
		this.requiereRefrigeracion = requiereRefrigeracion;
	}

	public Date getFechaBaja() {
		return fechaBaja;
	}

	public void setFechaBaja(Date fechaBaja) {
		this.fechaBaja = fechaBaja;
	}
}
