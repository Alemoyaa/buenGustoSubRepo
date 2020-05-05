package com.utn.app.buenGusto.receta;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.utn.app.buenGusto.articuloManufacturado.ArticuloManufacturadoDTO; 
import com.utn.app.buenGusto.common.CommonDTO;

public class RecetaDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String nombre_receta;  
	private Date fechaAlta; 
	private Date fechaBaja;

	@JsonIgnoreProperties("recetaAM")
	private ArticuloManufacturadoDTO articuloManufacturado;

	public String getNombre_receta() {
		return nombre_receta;
	}

	public void setNombre_receta(String nombre_receta) {
		this.nombre_receta = nombre_receta;
	}

	public Date getFechaAlta() {
		return fechaAlta;
	}

	public void setFechaAlta(Date fechaAlta) {
		this.fechaAlta = fechaAlta;
	}

	public Date getFechaBaja() {
		return fechaBaja;
	}

	public void setFechaBaja(Date fechaBaja) {
		this.fechaBaja = fechaBaja;
	}

	public ArticuloManufacturadoDTO getArticuloManufacturado() {
		return articuloManufacturado;
	}

	public void setArticuloManufacturado(ArticuloManufacturadoDTO articuloManufacturado) {
		this.articuloManufacturado = articuloManufacturado;
	}

}
