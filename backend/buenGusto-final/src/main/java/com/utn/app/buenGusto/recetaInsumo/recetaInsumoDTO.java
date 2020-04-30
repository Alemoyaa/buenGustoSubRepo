package com.utn.app.buenGusto.recetaInsumo;
 
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.utn.app.buenGusto.articuloInsumo.ArticuloInsumoDTO;
import com.utn.app.buenGusto.common.CommonDTO;

public class recetaInsumoDTO extends CommonDTO{

	private static final long serialVersionUID = 1L;

	private String nombre; 
 
	private Date fechaAlta;
	
	private Date fechaBaja;
 
	@JsonIgnoreProperties("recetaInsumo")
	private ArticuloInsumoDTO articuloInsumoReceta;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
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

	public ArticuloInsumoDTO getArticuloInsumoReceta() {
		return articuloInsumoReceta;
	}

	public void setArticuloInsumoReceta(ArticuloInsumoDTO articuloInsumoReceta) {
		this.articuloInsumoReceta = articuloInsumoReceta;
	}
	
}
