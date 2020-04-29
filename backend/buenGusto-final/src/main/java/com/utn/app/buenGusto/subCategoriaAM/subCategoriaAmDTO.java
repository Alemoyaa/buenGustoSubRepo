package com.utn.app.buenGusto.subCategoriaAM;

import com.utn.app.buenGusto.categoriaAM.CategoriaAMDTO;
import com.utn.app.buenGusto.common.CommonDTO;

public class subCategoriaAmDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String nombre;

	private CategoriaAMDTO categoria;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public CategoriaAMDTO getCategoria() {
		return categoria;
	}

	public void setCategoria(CategoriaAMDTO categoria) {
		this.categoria = categoria;
	}

}
