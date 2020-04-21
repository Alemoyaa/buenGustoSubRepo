package com.utn.app.buenGusto.DTO;

public class ArticuloInsumoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String denominacion;
	private double precioCompra;
	private double precioVenta;
	private double stockActual;
	private double stockMinimo;
	private String unidadMedida;
	private boolean esInsumo;

	private String _urlImagen;


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

	
	public String get_urlImagen() {
		return _urlImagen;
	}

	public void set_urlImagen(String _urlImagen) {
		this._urlImagen = _urlImagen;
	}
}
