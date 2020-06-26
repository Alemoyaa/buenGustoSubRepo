package com.utn.app.buenGusto.categoria;

import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "categoria")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class CategoriaEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = 8910812748496309673L;

	private boolean insumoOManuf;
	private String nombreCategoria;

	@JsonIgnoreProperties(value = { "hijos" })
	@ManyToOne(/* fetch = FetchType.LAZY */)
	private CategoriaEntity padre;

	@JsonIgnoreProperties(value = { "padre" }, allowSetters = true)
	@OneToMany(/* fetch = FetchType.LAZY, */mappedBy = "padre", cascade = CascadeType.ALL)
	@Transient
	private List<CategoriaEntity> hijos;

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

	public CategoriaEntity getPadre() {
		return padre;
	}

	public void setPadre(CategoriaEntity padre) {
		this.padre = padre;
	}

	public List<CategoriaEntity> getHijos() {
		return hijos;
	}

	public void setHijos(List<CategoriaEntity> hijos) {
		this.hijos = hijos;
	}

}
