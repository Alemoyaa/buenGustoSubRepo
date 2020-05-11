package com.utn.app.buenGusto.subCategoriaAM;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.categoriaAM.CategoriaAMEntity;

@Entity
@Table(name = "subcategoria_am")
public class SubCategoriaAMEntity implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
