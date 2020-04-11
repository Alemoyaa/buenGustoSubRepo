package com.utn.app.buenGusto.pedido;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotEmpty;

import com.utn.app.buenGusto.cliente.clienteEntity;
import com.utn.app.buenGusto.commons.commonEntity;
import com.utn.app.buenGusto.detallePedido.detallePedidoEntity;
import com.utn.app.buenGusto.factura.facturaEntity;

@Entity
@Table(name = "pedido")
public class pedidoEntity extends commonEntity implements Serializable {

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

	// --------Cliente--------
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "cliente_id", nullable = false)
	private clienteEntity cliente;

	// --------Factura----------
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private facturaEntity factura;

	// -------detallePedido----------
	@OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<detallePedidoEntity> detallePedidos;

	public pedidoEntity() {
		this.detallePedidos = new ArrayList<detallePedidoEntity>();
	}

	public pedidoEntity(@NotEmpty int fecha, @NotEmpty int numero, @NotEmpty int estado, Date horaEstimadaFin,
			@NotEmpty int tipoEnvio, clienteEntity cliente, facturaEntity factura,
			List<detallePedidoEntity> detallePedidos) {
		this.fecha = fecha;
		this.numero = numero;
		this.estado = estado;
		this.horaEstimadaFin = horaEstimadaFin;
		this.tipoEnvio = tipoEnvio;
		this.cliente = cliente;
		this.factura = factura;
		this.detallePedidos = new ArrayList<detallePedidoEntity>();
	}

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

	public List<detallePedidoEntity> getDetallePedidos() {
		return detallePedidos;
	}

	public void setDetallePedidos(List<detallePedidoEntity> detallePedidos) {
		this.detallePedidos = detallePedidos;
	}

	
}
