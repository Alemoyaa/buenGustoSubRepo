package com.utn.app.buenGusto.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity 
@Table(name = "pedido")
public class PedidoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -1998183735641277350L; 
 
	private Date fecha; 
	private int numero; 
	private int estado;

	@Temporal(TemporalType.TIMESTAMP)
	private Date horaEstimadaFin; 
	private int tipoEnvio;

	// --------Cliente--------
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cliente_id")
	@JsonIgnore
	private ClienteEntity cliente;

	
	
	public PedidoEntity() {
		super();
	}

	public PedidoEntity(Date fecha, int numero, int estado, Date horaEstimadaFin, int tipoEnvio,
			ClienteEntity cliente) {
		super();
		this.fecha = fecha;
		this.numero = numero;
		this.estado = estado;
		this.horaEstimadaFin = horaEstimadaFin;
		this.tipoEnvio = tipoEnvio;
		this.cliente = cliente;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
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

	public ClienteEntity getCliente() {
		return cliente;
	}

	public void setCliente(ClienteEntity cliente) {
		this.cliente = cliente;
	} 
	 
}
