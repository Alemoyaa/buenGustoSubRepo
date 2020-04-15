package com.utn.app.buenGusto.rubroArticulo;

import java.io.Serializable; 

import javax.persistence.CascadeType;
import javax.persistence.Entity; 
import javax.persistence.ManyToOne; 
import javax.persistence.Table; 

import com.fasterxml.jackson.annotation.JsonIgnoreProperties; 
import com.utn.app.buenGusto.commons.commonEntity; 

@Entity
@Table(name = "rubro_articulo")
public class rubroArticuloEntity extends commonEntity implements Serializable{
 
	private static final long serialVersionUID = 7182685621323307119L;
	 
	private String denominacion;
	@JsonIgnoreProperties(value = {"hijos"}) //Ignoramos el valor de el hijo cuando cargan un padre
	@ManyToOne(cascade = CascadeType.ALL)
	private rubroArticuloEntity padre;

	public rubroArticuloEntity() { 
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
	
}
