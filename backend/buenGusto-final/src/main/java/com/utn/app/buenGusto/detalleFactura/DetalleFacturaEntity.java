package com.utn.app.buenGusto.detalleFactura;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "detalle_factura")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class DetalleFacturaEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = 2677687221348892255L;

	private int cantidad;
	private double precioUnitario;
	private String nombreArticulo;

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

}
