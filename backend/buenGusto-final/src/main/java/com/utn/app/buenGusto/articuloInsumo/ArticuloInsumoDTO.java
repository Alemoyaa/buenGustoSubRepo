package com.utn.app.buenGusto.articuloInsumo;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.recetaInsumo.recetaInsumoDTO;
import com.utn.app.buenGusto.stockArticulo.stockArticuloDTO;

public class ArticuloInsumoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String denominacion; 
	private double precioDeVenta; 
	private double costoDeVenta; 
	private boolean requiereRefrigeracion; 
	private Date fechaBaja;
	
	@JsonIgnoreProperties("articuloInsumoReceta")
	private recetaInsumoDTO recetaInsumo;

	@JsonIgnoreProperties("articuloInsumoStock")
	private stockArticuloDTO stockArticulo;
	
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

	public recetaInsumoDTO getRecetaInsumo() {
		return recetaInsumo;
	}

	public void setRecetaInsumo(recetaInsumoDTO recetaInsumo) {
		this.recetaInsumo = recetaInsumo;
	}

	public stockArticuloDTO getStockArticulo() {
		return stockArticulo;
	}

	public void setStockArticulo(stockArticuloDTO stockArticulo) {
		this.stockArticulo = stockArticulo;
	}
	
}
