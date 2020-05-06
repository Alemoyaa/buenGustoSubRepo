package com.utn.app.buenGusto.estado;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "estado")
public class EstadoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	private String NombreEstado;

	public String getNombre() {
		return NombreEstado;
	}

	public void setNombre(String nombre) {
		NombreEstado = nombre;
	}

}
