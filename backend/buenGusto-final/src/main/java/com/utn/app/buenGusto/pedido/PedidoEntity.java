package com.utn.app.buenGusto.pedido;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.utn.app.buenGusto.cliente.ClienteEntity;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.factura.FacturaEntity;
import com.utn.app.buenGusto.pedidoEstado.EstadoEntity;

@Entity
@Table(name = "pedido")
public class PedidoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -1998183735641277350L;

	private Date fecha;
	private int numero; 

	@Temporal(TemporalType.TIMESTAMP)
	private Date horaEstimadaFin;
	private int tipoEnvio;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "estado_id")
	private EstadoEntity estado;
	
	// --------Cliente--------
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cliente_id")
	private ClienteEntity cliente; 

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

	public EstadoEntity getEstado() {
		return estado;
	}

	public void setEstado(EstadoEntity estado) {
		this.estado = estado;
	}

}
