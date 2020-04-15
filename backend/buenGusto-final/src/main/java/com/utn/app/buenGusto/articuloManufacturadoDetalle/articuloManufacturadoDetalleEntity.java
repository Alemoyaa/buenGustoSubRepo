package com.utn.app.buenGusto.articuloManufacturadoDetalle;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.articuloInsumo.articuloInsumoEntity;
import com.utn.app.buenGusto.articuloManufacturado.articuloManufacturadoEntity;
import com.utn.app.buenGusto.commons.commonEntity;

@Entity
@Table(name = "articulo_manufacturado_detalle")
public class articuloManufacturadoDetalleEntity extends commonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private double cantidad;
	private String unidadMedida;

	// relacion ManyToOne bidireccional ArticuloManufacturadoDetalle ---
	// ArticuloManufacturado
	@ManyToOne(cascade = CascadeType.ALL) // trae atributos y sus correspondientes relaciones
	@JoinColumn(name = "articuloManufacturadoDetalle_fk_articuloManufacturado")
	private articuloManufacturadoEntity articuloManufacturado;

	// relacion ManyToOne bidireccional ArticuloManufacturadoDetalle ---
	// ArticuloInsumo
	@ManyToOne(cascade = CascadeType.ALL) // trae atributos y sus correspondientes relaciones
	@JoinColumn(name = "articuloManufacturadoDetalle_fk_articuloInsumo")
	private articuloInsumoEntity articuloInsumo;
  
	public double getCantidad() {
		return cantidad;
	}

	public void setCantidad(double cantidad) {
		this.cantidad = cantidad;
	}

	public String getUnidadMedida() {
		return unidadMedida;
	}

	public void setUnidadMedida(String unidadMedida) {
		this.unidadMedida = unidadMedida;
	}

	public articuloManufacturadoEntity getArticuloManufacturado() {
		return articuloManufacturado;
	}

	public void setArticuloManufacturado(articuloManufacturadoEntity articuloManufacturado) {
		this.articuloManufacturado = articuloManufacturado;
	}

	public articuloInsumoEntity getArticuloInsumo() {
		return articuloInsumo;
	}

	public void setArticuloInsumo(articuloInsumoEntity articuloInsumo) {
		this.articuloInsumo = articuloInsumo;
	}

	
}
