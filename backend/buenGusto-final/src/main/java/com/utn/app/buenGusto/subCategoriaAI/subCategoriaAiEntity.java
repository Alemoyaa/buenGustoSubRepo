package com.utn.app.buenGusto.subCategoriaAI;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.categoriaAI.CategoriaAIEntity;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "subcategoria_ai")
public class subCategoriaAiEntity extends CommonEntity implements Serializable{

	private static final long serialVersionUID = 1L;

	private String nombre;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "categoria_id")
	private CategoriaAIEntity categoriaAI;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public CategoriaAIEntity getCategoriaAI() {
		return categoriaAI;
	}

	public void setCategoriaAI(CategoriaAIEntity categoriaAI) {
		this.categoriaAI = categoriaAI;
	}

}
