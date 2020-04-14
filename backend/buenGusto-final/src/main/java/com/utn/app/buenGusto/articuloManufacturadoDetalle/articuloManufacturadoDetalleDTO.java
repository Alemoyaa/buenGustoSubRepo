package com.utn.app.buenGusto.articuloManufacturadoDetalle;

import com.utn.app.buenGusto.articuloInsumo.articuloInsumoDTO; 
import com.utn.app.buenGusto.articuloManufacturado.articuloManufacturadoDTO; 
import com.utn.app.buenGusto.commons.commonDTO;

public class articuloManufacturadoDetalleDTO extends commonDTO  {

	private static final long serialVersionUID = 1L;
	
	private double cantidad;
	private String unidadMedida; 
	 
	private articuloInsumoDTO articuloInsumo;

	private articuloManufacturadoDTO articuloManufacturado;
 
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
	public articuloInsumoDTO getArticuloInsumo() {
		return articuloInsumo;
	}
	public void setArticuloInsumo(articuloInsumoDTO articuloInsumo) {
		this.articuloInsumo = articuloInsumo;
	}
	public articuloManufacturadoDTO getArticuloManufacturado() {
		return articuloManufacturado;
	}
	public void setArticuloManufacturado(articuloManufacturadoDTO articuloManufacturado) {
		this.articuloManufacturado = articuloManufacturado;
	} 

	
}
