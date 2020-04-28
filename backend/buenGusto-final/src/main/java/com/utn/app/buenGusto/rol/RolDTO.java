package com.utn.app.buenGusto.rol;

import com.utn.app.buenGusto.common.CommonDTO;

public class RolDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String nombreRol;
	private String descripcion;

	public String getNombreRol() {
		return nombreRol;
	}

	public void setNombreRol(String nombreRol) {
		this.nombreRol = nombreRol;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

}
