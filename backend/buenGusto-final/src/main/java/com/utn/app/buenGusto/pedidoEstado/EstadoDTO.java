package com.utn.app.buenGusto.pedidoEstado;

import com.utn.app.buenGusto.common.CommonDTO;

public class EstadoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String Nombre;

	public String getNombre() {
		return Nombre;
	}

	public void setNombre(String nombre) {
		Nombre = nombre;
	}
}
