package com.utn.app.buenGusto.formaPago;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "factura")
public class FormaPagoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

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
	
}
