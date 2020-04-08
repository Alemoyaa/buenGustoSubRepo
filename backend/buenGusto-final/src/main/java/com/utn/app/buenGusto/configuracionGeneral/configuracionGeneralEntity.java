package com.utn.app.buenGusto.configuracionGeneral;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.PrePersist;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotEmpty;

import com.utn.app.buenGusto.commons.commonEntity;

@Entity
public class configuracionGeneralEntity extends commonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	@NotEmpty
	private String denominacion;
	
	@NotEmpty
	private double precioCompra;
	
	@NotEmpty
	private double precioVenta;
	
	@NotEmpty
	private double stockActual;
	
	@NotEmpty
	private double stockMinimo;
	
	@NotEmpty
	private String unidadMedida;
	
	@NotEmpty
	private boolean esInsumo;
	
	public String getDenominacion() {
		return denominacion;
	}
	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}
	public double getPrecioCompra() {
		return precioCompra;
	}
	public void setPrecioCompra(double precioCompra) {
		this.precioCompra = precioCompra;
	}
	public double getPrecioVenta() {
		return precioVenta;
	}
	public void setPrecioVenta(double precioVenta) {
		this.precioVenta = precioVenta;
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
	public String getUnidadMedida() {
		return unidadMedida;
	}
	public void setUnidadMedida(String unidadMedida) {
		this.unidadMedida = unidadMedida;
	}
	public boolean isEsInsumo() {
		return esInsumo;
	}
	public void setEsInsumo(boolean esInsumo) {
		this.esInsumo = esInsumo;
	}
		
	
}
