package com.utn.app.buenGusto.localidad;

import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.provincia.ProvinciaEntity;

@Entity
@Table(name = "localidad")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class LocalidadEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -3414135937301976153L;

	private String nombre;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "provincia_id")
	private ProvinciaEntity provincia;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public ProvinciaEntity getProvincia() {
		return provincia;
	}

	public void setProvincia(ProvinciaEntity provincia) {
		this.provincia = provincia;
	}

}
