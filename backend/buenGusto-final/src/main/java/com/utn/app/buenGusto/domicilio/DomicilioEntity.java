package com.utn.app.buenGusto.domicilio;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.localidad.LocalidadEntity;

@Entity
@Table(name = "domicilio")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class DomicilioEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = 5685412683798686451L;

	private String calle;
	private int numero;
	private int piso;
	private int nroDepartamento;
	private String aclaracion;

	@ManyToOne
	@JoinColumn(name = "localidad_id")
	private LocalidadEntity localidad;

	public String getCalle() {
		return calle;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public int getPiso() {
		return piso;
	}

	public void setPiso(int piso) {
		this.piso = piso;
	}

	public String getAclaracion() {
		return aclaracion;
	}

	public void setAclaracion(String aclaracion) {
		this.aclaracion = aclaracion;
	}

	public LocalidadEntity getLocalidad() {
		return localidad;
	}

	public void setLocalidad(LocalidadEntity localidad) {
		this.localidad = localidad;
	}

	public int getNroDepartamento() {
		return nroDepartamento;
	}

	public void setNroDepartamento(int nroDepartamento) {
		this.nroDepartamento = nroDepartamento;
	}

}
