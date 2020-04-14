package com.utn.app.buenGusto.articuloManufacturadoDetalle;

import com.utn.app.buenGusto.articuloInsumo.articuloInsumoEntity;
import com.utn.app.buenGusto.articuloManufacturado.articuloManufacturadoEntity;
import com.utn.app.buenGusto.commons.commonDTO;

public class articuloManufacturadoDetalleDTO extends commonDTO  {

	private double cantidad;
	private String unidadMedida; 
	 
	
	public articuloManufacturadoDetalleDTO() {
		super();
	} 
	public double getCantidad() {
		return cantidad;
	}
	public void setCantidad(double cantidad) {
		this.cantidad = cantidad;
	}
	public String getUnidadMedida() {
		return unidadMedida;
	}
	public void setUnidadMedida(String unidadMedida) {
		this.unidadMedida = unidadMedida;
	} 
}
