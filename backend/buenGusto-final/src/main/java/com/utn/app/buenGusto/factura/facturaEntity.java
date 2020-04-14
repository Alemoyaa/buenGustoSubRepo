package com.utn.app.buenGusto.factura;

import java.io.Serializable; 
import java.util.Date; 
 
import javax.persistence.Entity; 
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
 
import com.utn.app.buenGusto.commons.commonEntity; 

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
	//@OneToOne(fetch = FetchType.LAZY)
	//private pedidoEntity pedido;

	// -----detallePedido---------
	//@OneToMany(mappedBy = "facturaDetalle")
	//private List<detallePedidoEntity> detallePedidosF;


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
}
