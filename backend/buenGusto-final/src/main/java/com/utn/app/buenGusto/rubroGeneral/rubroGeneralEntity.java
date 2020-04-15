package com.utn.app.buenGusto.rubroGeneral;

import java.io.Serializable;
 
import javax.persistence.Entity;
import javax.persistence.Table; 

import com.utn.app.buenGusto.commons.commonEntity;

@Entity
@Table(name = "rubro_general")
public class rubroGeneralEntity extends commonEntity implements Serializable {

	private static final long serialVersionUID = -2061211142699575304L;
 
	private String denominacion;
	
	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}
	public String getDenominacion() {
		return denominacion;
	}
}
