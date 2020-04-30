package com.utn.app.buenGusto.articuloManufacturado;
 
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.receta.RecetaDTO;
import com.utn.app.buenGusto.subCategoriaAM.subCategoriaAmDTO; 

public class ArticuloManufacturadoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private int tiempoEstimadoCocina;
	private String _urlImagen;
	private String denominacion;
	private double precioVenta;
	private double costoVenta;
	private Date fechaBaja;
	
	@JsonIgnoreProperties("articuloManufacturado")
	private RecetaDTO recetaAM;
	
	private subCategoriaAmDTO subCategoriaAm;
	

	public int getTiempoEstimadoCocina() {
		return tiempoEstimadoCocina;
	}

	public void setTiempoEstimadoCocina(int tiempoEstimadoCocina) {
		this.tiempoEstimadoCocina = tiempoEstimadoCocina;
	}

	public String get_urlImagen() {
		return _urlImagen;
	}

	public void set_urlImagen(String _urlImagen) {
		this._urlImagen = _urlImagen;
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

	public double getCostoVenta() {
		return costoVenta;
	}

	public void setCostoVenta(double costoVenta) {
		this.costoVenta = costoVenta;
	}

	public Date getFechaBaja() {
		return fechaBaja;
	}

	public void setFechaBaja(Date fechaBaja) {
		this.fechaBaja = fechaBaja;
	}

	public subCategoriaAmDTO getSubCategoriaAm() {
		return subCategoriaAm;
	}

	public void setSubCategoriaAm(subCategoriaAmDTO subCategoriaAm) {
		this.subCategoriaAm = subCategoriaAm;
	}

	public RecetaDTO getRecetaAM() {
		return recetaAM;
	}

	public void setRecetaAM(RecetaDTO recetaAM) {
		this.recetaAM = recetaAM;
	}
	   
}
