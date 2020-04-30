package com.utn.app.buenGusto.articuloInsumo;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
 
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "articulo_insumo")
public class ArticuloInsumoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

private String denominacion;
	
	private double precioDeVenta;
	
	private double costoDeVenta;
	
	private boolean requiereRefrigeracion;
	
	private Date fechaBaja;

	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}

	public double getPrecioDeVenta() {
		return precioDeVenta;
	}

	public void setPrecioDeVenta(double precioDeVenta) {
		this.precioDeVenta = precioDeVenta;
	}

	public double getCostoDeVenta() {
		return costoDeVenta;
	}

	public void setCostoDeVenta(double costoDeVenta) {
		this.costoDeVenta = costoDeVenta;
	}

	public boolean isRequiereRefrigeracion() {
		return requiereRefrigeracion;
	}

	public void setRequiereRefrigeracion(boolean requiereRefrigeracion) {
		this.requiereRefrigeracion = requiereRefrigeracion;
	}

	public Date getFechaBaja() {
		return fechaBaja;
	}

	public void setFechaBaja(Date fechaBaja) {
		this.fechaBaja = fechaBaja;
	}

}
