package com.utn.app.buenGusto.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "domicilio")
public class DomicilioEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = 5685412683798686451L;

	private String calle;
	private int numero;
	private String localidad;

	@ManyToOne(targetEntity = ClienteEntity.class)
	@JoinColumn(name = "cliente_fk_domicilio")
	private ClienteEntity clienteDomicilio;

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

	public String getLocalidad() {
		return localidad;
	}

	public void setLocalidad(String localidad) {
		this.localidad = localidad;
	}

	public ClienteEntity getClienteDomicilio() {
		return clienteDomicilio;
	}

	public void setClienteDomicilio(ClienteEntity clienteDomicilio) {
		this.clienteDomicilio = clienteDomicilio;
	}

}
