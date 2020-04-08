package com.utn.app.buenGusto.pedido;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotEmpty;

import com.utn.app.buenGusto.commons.commonEntity;

@Entity
@Table(name = "pedido")
public class pedidoEntity extends commonEntity implements Serializable{
 
	private static final long serialVersionUID = -1998183735641277350L;
	
	@NotEmpty
	private int fecha;
	
	@NotEmpty
	private int numero;
	
	@NotEmpty
	private int estado;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date horaEstimadaFin;
	
	@NotEmpty
	private int tipoEnvio;

	public int getFecha() {
		return fecha;
	}

	public void setFecha(int fecha) {
		this.fecha = fecha;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public int getEstado() {
		return estado;
	}

	public void setEstado(int estado) {
		this.estado = estado;
	}

	public Date getHoraEstimadaFin() {
		return horaEstimadaFin;
	}

	public void setHoraEstimadaFin(Date horaEstimadaFin) {
		this.horaEstimadaFin = horaEstimadaFin;
	}

	public int getTipoEnvio() {
		return tipoEnvio;
	}

	public void setTipoEnvio(int tipoEnvio) {
		this.tipoEnvio = tipoEnvio;
	}
	
}
