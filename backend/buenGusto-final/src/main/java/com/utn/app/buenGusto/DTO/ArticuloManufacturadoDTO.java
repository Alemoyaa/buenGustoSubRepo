package com.utn.app.buenGusto.DTO;

public class ArticuloManufacturadoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private int tiempoEstimadoCocina;
	private String denominacion;
	private double precioVenta;

	private String _urlImagen;

	private RubroGeneralDTO rubroGeneral;

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

	public RubroGeneralDTO getRubroGeneral() {
		return rubroGeneral;
	}

	public void setRubroGeneral(RubroGeneralDTO rubroGeneral) {
		this.rubroGeneral = rubroGeneral;
	}

	public String get_urlImagen() {
		return _urlImagen;
	}

	public void set_urlImagen(String _urlImagen) {
		this._urlImagen = _urlImagen;
	}

}
