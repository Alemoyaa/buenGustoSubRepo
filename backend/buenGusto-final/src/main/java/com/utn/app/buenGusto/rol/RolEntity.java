package com.utn.app.buenGusto.rol;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "rol")
public class RolEntity extends CommonEntity implements Serializable {
	private static final long serialVersionUID = 5685412683798686451L;

	private String nombreRol;
	private String descripcion;

	public String getNombreRol() {
		return nombreRol;
	}

	public void setNombreRol(String nombreRol) {
		this.nombreRol = nombreRol;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

}
