package com.utn.app.buenGusto.factura;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity; 
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType; 

import com.utn.app.buenGusto.commons.commonEntity;
import com.utn.app.buenGusto.detallePedido.detallePedidoEntity;
import com.utn.app.buenGusto.pedido.pedidoEntity;

@Entity
@Table(name = "factura")
public class facturaEntity extends commonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private int número;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date fecha;
	
	private double montoDescuento;
	private double total;
	private String formaPago;
	private String nroTarjeta;

	// ------pedido--------
	@OneToOne(mappedBy = "factura", cascade = CascadeType.ALL)
	private pedidoEntity pedido;

	// -----detallePedido---------
	@OneToMany(mappedBy = "facturaDetalle", cascade = CascadeType.ALL)
	private List<detallePedidoEntity> detallePedidosF;

	public facturaEntity() {
		this.detallePedidosF = new ArrayList<detallePedidoEntity>();
	} 

	@PrePersist
	public void prePersist() {
		this.fecha = new Date();
	}

	public int getNúmero() {
		return número;
	}

	public void setNúmero(int número) {
		this.número = número;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public double getMontoDescuento() {
		return montoDescuento;
	}

	public void setMontoDescuento(double montoDescuento) {
		this.montoDescuento = montoDescuento;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public String getFormaPago() {
		return formaPago;
	}

	public void setFormaPago(String formaPago) {
		this.formaPago = formaPago;
	}

	public String getNroTarjeta() {
		return nroTarjeta;
	}

	public void setNroTarjeta(String nroTarjeta) {
		this.nroTarjeta = nroTarjeta;
	}

	public pedidoEntity getPedido() {
		return pedido;
	}

	public void setPedido(pedidoEntity pedido) {
		this.pedido = pedido;
	}

	public List<detallePedidoEntity> getDetallePedidosF() {
		return detallePedidosF;
	}

	public void setDetallePedidosF(List<detallePedidoEntity> detallePedidosF) {
		this.detallePedidosF = detallePedidosF;
	}
 
}
