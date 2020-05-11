package com.utn.app.buenGusto.detallePago;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.factura.FacturaEntity;

@Entity
@Table(name = "detalle_pago")
public class DetallePagoEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	
}
