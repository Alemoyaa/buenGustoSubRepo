package com.utn.app.buenGusto.estado;

import com.utn.app.buenGusto.common.CommonDTO;

public class EstadoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String NombreEstado;

	public String getNombre() {
		return NombreEstado;
	}

	public void setNombre(String nombre) {
		NombreEstado = nombre;
	}
}
