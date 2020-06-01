package com.utn.app.buenGusto.detalleFactura;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.cabezaFactura.CabezaFacturaEntity;

@Entity
@Table(name = "detalle_factura")
public class DetalleFacturaEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2677687221348892255L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;
	private int cantidad;
	private double precioUnitario;
	private String nombreArticulo;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "factura_id")
	private CabezaFacturaEntity cabezaFactura;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public double getPrecioUnitario() {
		return precioUnitario;
	}

	public void setPrecioUnitario(double precioUnitario) {
		this.precioUnitario = precioUnitario;
	}

	public String getNombreArticulo() {
		return nombreArticulo;
	}

	public void setNombreArticulo(String nombreArticulo) {
		this.nombreArticulo = nombreArticulo;
	}

	public CabezaFacturaEntity getCabezaFactura() {
		return cabezaFactura;
	}

	public void setCabezaFactura(CabezaFacturaEntity cabezaFactura) {
		this.cabezaFactura = cabezaFactura;
	}

}
