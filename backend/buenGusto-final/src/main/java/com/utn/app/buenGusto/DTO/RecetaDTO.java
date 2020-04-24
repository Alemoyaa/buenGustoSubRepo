package com.utn.app.buenGusto.DTO;

import java.util.Date;

public class RecetaDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String nombreReceta;
	private Date fechaDeAlta;

	public String getNombreReceta() {
		return nombreReceta;
	}

	public void setNombreReceta(String nombreReceta) {
		this.nombreReceta = nombreReceta;
	}

	public Date getFechaDeAlta() {
		return fechaDeAlta;
	}

	public void setFechaDeAlta(Date fechaDeAlta) {
		this.fechaDeAlta = fechaDeAlta;
	}

}
