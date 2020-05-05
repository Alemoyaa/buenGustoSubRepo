package com.utn.app.buenGusto.factura;

import java.util.Date;

import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.pedido.PedidoDTO;

public class FacturaDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private int número;
	private Date fecha;
	private double montoDescuento;
	private double total;
	private String formaPago;
	private String nroTarjeta;
	
	private PedidoDTO pedido;

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

	public PedidoDTO getPedido() {
		return pedido;
	}

	public void setPedido(PedidoDTO pedido) {
		this.pedido = pedido;
	}
	
	
}
