package com.utn.app.buenGusto.provincia;

import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.pais.PaisEntity;

@Entity
@Table(name = "provincia")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ProvinciaEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8959812908842109039L;

	private String nombre;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "pais_id")
	private PaisEntity pais;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public PaisEntity getPais() {
		return pais;
	}

	public void setPais(PaisEntity pais) {
		this.pais = pais;
	}

}
