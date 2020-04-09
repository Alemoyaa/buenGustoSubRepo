package com.utn.app.buenGusto.rubroArticulo;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.utn.app.buenGusto.commons.commonEntity;

@Entity
@Table(name = "rubro_articulo")
public class rubroArticuloEntity extends commonEntity implements Serializable{
 
	private static final long serialVersionUID = 7182685621323307119L;
	
	@NotEmpty
	private String denominacion;

	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}
	
}
