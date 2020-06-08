package com.utn.app.buenGusto.categoria;

import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "categoria")
public class CategoriaEntity implements Serializable {

	private static final long serialVersionUID = 8910812748496309673L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;

	private boolean insumoOManuf;
	private String nombreCategoria;

	@JsonIgnoreProperties(value = { "Categoriahijos" })
	@ManyToOne(fetch = FetchType.LAZY)
	private CategoriaEntity Categoriapadre;

	@JsonIgnoreProperties(value = { "Categoriapadre" }, allowSetters = true)
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "Categoriapadre", cascade = CascadeType.ALL)
	private List<CategoriaEntity> Categoriahijos;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public boolean isInsumoOManuf() {
		return insumoOManuf;
	}

	public void setInsumoOManuf(boolean insumoOManuf) {
		this.insumoOManuf = insumoOManuf;
	}

	public String getNombreCategoria() {
		return nombreCategoria;
	}

	public void setNombreCategoria(String nombreCategoria) {
		this.nombreCategoria = nombreCategoria;
	}

	public CategoriaEntity getCategoriapadre() {
		return Categoriapadre;
	}

	public void setCategoriapadre(CategoriaEntity categoriapadre) {
		Categoriapadre = categoriapadre;
	}

	public List<CategoriaEntity> getCategoriahijos() {
		return Categoriahijos;
	}

	public void setCategoriahijos(List<CategoriaEntity> categoriahijos) {
		Categoriahijos = categoriahijos;
	}

}
