package com.utn.app.buenGusto.factura;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.utn.app.buenGusto.commons.commonDTO;

public class facturaDTO extends commonDTO  {
		
	
	
	private int número;
	private Date fecha;
	private double montoDescuento;
	private double total;
	private String formaPago;
	private String nroTarjeta;
	
	
	
	
	
	public facturaDTO() {
		super();
	}
	public facturaDTO(int número, Date fecha, double montoDescuento, double total, String formaPago,
			String nroTarjeta) {
		super();
		this.número = número;
		this.fecha = fecha;
		this.montoDescuento = montoDescuento;
		this.total = total;
		this.formaPago = formaPago;
		this.nroTarjeta = nroTarjeta;
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
