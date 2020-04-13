package com.utn.app.buenGusto.articuloManufacturado;

import com.utn.app.buenGusto.commons.commonDTO;
import com.utn.app.buenGusto.rubroGeneral.rubroGeneralEntity;

public class articuloManufacturadoDTO extends commonDTO {
	
	private int tiempoEstimadoCocina;
	private String denominacion;
	private double precioVenta; 
	
	public articuloManufacturadoDTO() {
		super();
	} 
	public int getTiempoEstimadoCocina() {
		return tiempoEstimadoCocina;
	}
	public void setTiempoEstimadoCocina(int tiempoEstimadoCocina) {
		this.tiempoEstimadoCocina = tiempoEstimadoCocina;
	}
	public String getDenominacion() {
		return denominacion;
	}
	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}
	public double getPrecioVenta() {
		return precioVenta;
	}
	public void setPrecioVenta(double precioVenta) {
		this.precioVenta = precioVenta;
	} 
}
