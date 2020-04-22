package com.utn.app.buenGusto.DTO;

import com.utn.app.buenGusto.entities.ArticuloEntity;

public class ArticuloManufacturadoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String denominacion;
	private double precioVenta;
	private int tiempoEstimadoCocina;
	private String _urlImagen;
	
	
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

	public String get_urlImagen() {
		return _urlImagen;
	}

	public void set_urlImagen(String _urlImagen) {
		this._urlImagen = _urlImagen;
	}

}
