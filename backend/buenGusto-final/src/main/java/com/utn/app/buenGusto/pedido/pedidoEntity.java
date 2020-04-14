package com.utn.app.buenGusto.pedido;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
 
import com.utn.app.buenGusto.cliente.clienteEntity;
import com.utn.app.buenGusto.commons.commonEntity;
import com.utn.app.buenGusto.factura.facturaEntity;

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
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "factura_id") 
	private facturaEntity factura;
	
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

	public facturaEntity getFactura() {
		return factura;
	}

	public void setFactura(facturaEntity factura) {
		this.factura = factura;
	}

	public clienteEntity getCliente() {
		return cliente;
	}

	public void setCliente(clienteEntity cliente) {
		this.cliente = cliente;
	} 
	

	
}
