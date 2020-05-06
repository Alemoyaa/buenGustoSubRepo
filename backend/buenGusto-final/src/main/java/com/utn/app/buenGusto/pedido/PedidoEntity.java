package com.utn.app.buenGusto.pedido;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne; 
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.estado.EstadoEntity;
import com.utn.app.buenGusto.usuario.UsuarioEntity;

@Entity
@Table(name = "pedido")
public class PedidoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -1998183735641277350L;

	private Date fecha;
	private int numero; 

	@Temporal(TemporalType.TIMESTAMP)
	private Date horaEstimadaFin;
	private boolean tipoEnvio;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "estado_id")
	private EstadoEntity estado;
	 
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cliente_id")
	private UsuarioEntity cliente; 

	@PrePersist
	public void prePersist() {
		this.fecha = new Date();
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

	public Date getHoraEstimadaFin() {
		return horaEstimadaFin;
	}

	public void setHoraEstimadaFin(Date horaEstimadaFin) {
		this.horaEstimadaFin = horaEstimadaFin;
	}

	public boolean getTipoEnvio() {
		return tipoEnvio;
	}

	public void setTipoEnvio(boolean tipoEnvio) {
		this.tipoEnvio = tipoEnvio;
	}

	public UsuarioEntity getCliente() {
		return cliente;
	}

	public void setCliente(UsuarioEntity cliente) {
		this.cliente = cliente;
	}

	public EstadoEntity getEstado() {
		return estado;
	}

	public void setEstado(EstadoEntity estado) {
		this.estado = estado;
	}

}
