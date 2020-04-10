package com.utn.app.buenGusto.rubroGeneral;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.utn.app.buenGusto.articuloManufacturado.articuloManufacturadoEntity;
import com.utn.app.buenGusto.commons.commonEntity;


@Entity
@Table(name = "rubro_general")
public class rubroGeneralEntity extends commonEntity implements Serializable{
 
	private static final long serialVersionUID = -2061211142699575304L;

	@NotEmpty
	private String denominacion;

	public String getDenominacion() {
		return denominacion;
	}
	
	
	// relacion OneToMany bidireccional RubroGeneral -- ArticuloManufacturado
		 @OneToMany(mappedBy = "rubroGeneral",cascade = CascadeType.ALL, orphanRemoval = true)
		    private List<articuloManufacturadoEntity> articuloManufacturado = new ArrayList<>();

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}
	  
}
