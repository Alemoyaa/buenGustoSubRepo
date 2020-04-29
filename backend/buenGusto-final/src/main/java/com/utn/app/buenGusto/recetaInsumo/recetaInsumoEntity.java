package com.utn.app.buenGusto.recetaInsumo;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "receta_insumo")
public class recetaInsumoEntity extends CommonEntity implements Serializable{

	private static final long serialVersionUID = 1L;

	private String nombre; 

	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaAlta;
	
	private Date fechaBaja;


	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Date getFechaAlta() {
		return fechaAlta;
	}

	public void setFechaAlta(Date fechaAlta) {
		this.fechaAlta = fechaAlta;
	}

	public Date getFechaBaja() {
		return fechaBaja;
	}

	public void setFechaBaja(Date fechaBaja) {
		this.fechaBaja = fechaBaja;
	}
	
}
