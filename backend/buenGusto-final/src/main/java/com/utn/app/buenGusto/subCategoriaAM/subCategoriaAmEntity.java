package com.utn.app.buenGusto.subCategoriaAM;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.categoriaAM.CategoriaAMEntity;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "subcategoria_am")
public class subCategoriaAmEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	private String nombre;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "categoria_id")
	private CategoriaAMEntity categoria;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public CategoriaAMEntity getCategoria() {
		return categoria;
	}

	public void setCategoria(CategoriaAMEntity categoria) {
		this.categoria = categoria;
	}

}
