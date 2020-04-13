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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.utn.app.buenGusto.articuloInsumo.articuloInsumoEntity;
import com.utn.app.buenGusto.commons.commonEntity; 

@Entity
@Table(name = "rubro_articulo")
public class rubroArticuloEntity extends commonEntity implements Serializable{
 
	private static final long serialVersionUID = 7182685621323307119L;
	 
	private String denominacion;
	
	//ArticuloInsumo varios rubros
	/*
	 * @OneToMany(mappedBy = "rubrosArticulo", fetch = FetchType.LAZY, orphanRemoval = true)
	private List<articuloInsumoEntity> articuloInsumo = new ArrayList<articuloInsumoEntity>();

	@JsonIgnoreProperties(value = {"hijos"}) //Ignoramos el valor de el hijo cuando cargan un padre
	@ManyToOne(cascade = CascadeType.ALL)
	private rubroArticuloEntity padre;
	
	@JsonIgnoreProperties(value = {"padre"}, allowSetters = true) //Ignoramos al padre
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "padre")
	private List<rubroArticuloEntity> hijos = new ArrayList<rubroArticuloEntity>();
	
	*/
	
	public rubroArticuloEntity() { 
	} 

	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	} 
	
}
