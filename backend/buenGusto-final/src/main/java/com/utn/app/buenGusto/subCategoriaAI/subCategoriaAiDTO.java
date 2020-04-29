package com.utn.app.buenGusto.subCategoriaAI;

import com.utn.app.buenGusto.categoriaAI.CategoriaAIDTO;
import com.utn.app.buenGusto.common.CommonDTO;

public class subCategoriaAiDTO extends CommonDTO{
 
	private static final long serialVersionUID = 1L;

	private String nombre;
	
	private CategoriaAIDTO categoriaAI;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public CategoriaAIDTO getCategoriaAI() {
		return categoriaAI;
	}

	public void setCategoriaAI(CategoriaAIDTO categoriaAI) {
		this.categoriaAI = categoriaAI;
	}
	
}
