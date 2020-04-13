package com.utn.app.buenGusto.pedido;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.utn.app.buenGusto.cliente.clienteEntity;
import com.utn.app.buenGusto.commons.commonEntity;

@Entity
@Table(name = "pedido")
public class pedidoEntity extends commonEntity implements Serializable {

	private static final long serialVersionUID = -1998183735641277350L;
 
	private int fecha; 
	private int numero; 
	private int estado;

	@Temporal(TemporalType.TIMESTAMP)
	private Date horaEstimadaFin; 
	private int tipoEnvio;

	// --------Cliente--------
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cliente_id")
	private clienteEntity cliente;

	// --------Factura---------- 
	/*@OneToOne
	@JoinColumn(name = "factura_id")
	@JsonIgnoreProperties("pedido")
	private facturaEntity factura;

	// -------detallePedido----------
	@OneToMany(mappedBy = "pedido_detallePedido")
	private List<detallePedidoEntity> detallePedidos;
*/ 
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

	public clienteEntity getCliente() {
		return cliente;
	}

	public void setCliente(clienteEntity cliente) {
		this.cliente = cliente;
	}
	
}
