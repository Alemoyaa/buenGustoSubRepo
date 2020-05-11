package com.utn.app.buenGusto.formaPago;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "forma_pago")
public class FormaPagoEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private String nombreForma;
	private double montoDescuento;
	
	
	public String getNombreForma() {
		return nombreForma;
	}
	public void setNombreForma(String nombreForma) {
		this.nombreForma = nombreForma;
	}
	public double getMontoDescuento() {
		return montoDescuento;
	}
	public void setMontoDescuento(double montoDescuento) {
		this.montoDescuento = montoDescuento;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	
}
