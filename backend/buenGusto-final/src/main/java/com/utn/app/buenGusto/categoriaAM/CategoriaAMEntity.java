package com.utn.app.buenGusto.categoriaAM;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "categoria_am")
public class CategoriaAMEntity extends CommonEntity implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private String nombre;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
}
