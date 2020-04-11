package com.utn.app.buenGusto.rubroArticulo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.utn.app.buenGusto.articuloInsumo.articuloInsumoEntity;
import com.utn.app.buenGusto.commons.commonEntity; 

@Entity
@Table(name = "rubro_articulo")
public class rubroArticuloEntity extends commonEntity implements Serializable{
 
	private static final long serialVersionUID = 7182685621323307119L;
	
	@NotEmpty
	private String denominacion;
	
	//ArticuloInsumo varios rubros
	@OneToMany(mappedBy = "rubrosArticulo", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<articuloInsumoEntity> articuloInsumo = new ArrayList<articuloInsumoEntity>();

	@JsonIgnoreProperties(value = {"hijos"}) //Ignoramos el valor de el hijo cuando cargan un padre
	@ManyToOne(fetch = FetchType.LAZY)
	private rubroArticuloEntity padre;
	
	@JsonIgnoreProperties(value = {"padre"}, allowSetters = true) //Ignoramos al padre
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "padre", cascade = CascadeType.ALL)
	private List<rubroArticuloEntity> hijos = new ArrayList<rubroArticuloEntity>();
	
	
	
	public rubroArticuloEntity() { 
	}

	public rubroArticuloEntity(@NotEmpty String denominacion, List<articuloInsumoEntity> articuloInsumo,
			rubroArticuloEntity padre, List<rubroArticuloEntity> hijos) { 
		
		this.denominacion = denominacion;
		this.articuloInsumo = articuloInsumo;
		this.padre = padre;
		this.hijos = hijos;
	}

	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}

	public rubroArticuloEntity getPadre() {
		return padre;
	}

	public void setPadre(rubroArticuloEntity padre) {
		this.padre = padre;
	}

	public List<rubroArticuloEntity> getHijos() {
		return hijos;
	}

	public void setHijos(List<rubroArticuloEntity> hijos) {
		this.hijos = hijos;
	}

	public List<articuloInsumoEntity> getArticuloInsumo() {
		return articuloInsumo;
	}

	public void setArticuloInsumo(List<articuloInsumoEntity> articuloInsumo) {
		this.articuloInsumo = articuloInsumo;
	}
 
	
}
