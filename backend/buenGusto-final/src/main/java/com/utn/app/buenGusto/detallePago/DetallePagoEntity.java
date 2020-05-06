package com.utn.app.buenGusto.detallePago;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.factura.FacturaEntity;

@Entity
@Table(name = "factura")
public class DetallePagoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private String nombre_titular_tarjeta;
	private int nro_tarjeta;
	
	@OneToOne(cascade = CascadeType.REMOVE)
	@JoinColumn(name = "factura_id",nullable = true)
	private FacturaEntity factura;

	public String getNombre_titular_tarjeta() {
		return nombre_titular_tarjeta;
	}

	public void setNombre_titular_tarjeta(String nombre_titular_tarjeta) {
		this.nombre_titular_tarjeta = nombre_titular_tarjeta;
	}

	public int getNro_tarjeta() {
		return nro_tarjeta;
	}

	public void setNro_tarjeta(int nro_tarjeta) {
		this.nro_tarjeta = nro_tarjeta;
	}

	public FacturaEntity getFactura() {
		return factura;
	}

	public void setFactura(FacturaEntity factura) {
		this.factura = factura;
	}
	
}
