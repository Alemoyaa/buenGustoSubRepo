package com.utn.app.buenGusto.rubroArticulo;

import java.io.Serializable;

import javax.persistence.Entity;

import com.utn.app.buenGusto.commons.commonEntity;

@Entity
public class rubroArticuloEntity extends commonEntity implements Serializable{

	private String denominacion;

	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}
	
}
