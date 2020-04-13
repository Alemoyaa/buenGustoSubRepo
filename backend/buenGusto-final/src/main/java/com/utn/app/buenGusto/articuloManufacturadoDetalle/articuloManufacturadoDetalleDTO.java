package com.utn.app.buenGusto.articuloManufacturadoDetalle;

import com.utn.app.buenGusto.articuloInsumo.articuloInsumoEntity;
import com.utn.app.buenGusto.articuloManufacturado.articuloManufacturadoEntity;
import com.utn.app.buenGusto.commons.commonDTO;

public class articuloManufacturadoDetalleDTO extends commonDTO  {

	private double cantidad;
	private String unidadMedida;
	private articuloManufacturadoEntity articuloManufacturado;
	private articuloInsumoEntity articuloInsumo;
	
	
	
	
	
	public articuloManufacturadoDetalleDTO() {
		super();
	}
	public articuloManufacturadoDetalleDTO(double cantidad, String unidadMedida,
			articuloManufacturadoEntity articuloManufacturado, articuloInsumoEntity articuloInsumo) {
		super();
		this.cantidad = cantidad;
		this.unidadMedida = unidadMedida;
		this.articuloManufacturado = articuloManufacturado;
		this.articuloInsumo = articuloInsumo;
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
	public articuloManufacturadoEntity getArticuloManufacturado() {
		return articuloManufacturado;
	}
	public void setArticuloManufacturado(articuloManufacturadoEntity articuloManufacturado) {
		this.articuloManufacturado = articuloManufacturado;
	}
	public articuloInsumoEntity getArticuloInsumo() {
		return articuloInsumo;
	}
	public void setArticuloInsumo(articuloInsumoEntity articuloInsumo) {
		this.articuloInsumo = articuloInsumo;
	}
	
	
	
}
