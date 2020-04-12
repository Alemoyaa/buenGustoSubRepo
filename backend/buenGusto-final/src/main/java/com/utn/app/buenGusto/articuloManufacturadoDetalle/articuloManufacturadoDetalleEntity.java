package com.utn.app.buenGusto.articuloManufacturadoDetalle;

import java.io.Serializable; 
 
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
	@ManyToOne(fetch = FetchType.LAZY) // trae atributos y sus correspondientes relaciones
	@JoinColumn(name = "articuloManufacturadoDetalle_fk_articuloManufacturado")
	private articuloManufacturadoEntity articuloManufacturado;

	// relacion ManyToOne bidireccional ArticuloManufacturadoDetalle ---
	// ArticuloInsumo
	@ManyToOne(fetch = FetchType.LAZY) // trae atributos y sus correspondientes relaciones
	@JoinColumn(name = "articuloManufacturadoDetalle_fk_articuloInsumo")
	private articuloInsumoEntity articuloInsumo;

	public articuloManufacturadoDetalleEntity(double cantidad, String unidadMedida,
			articuloManufacturadoEntity articuloManufacturado, articuloInsumoEntity articuloInsumo) {

		this.cantidad = cantidad;
		this.unidadMedida = unidadMedida;
		this.articuloManufacturado = articuloManufacturado;
		this.articuloInsumo = articuloInsumo;
	}

	public articuloManufacturadoDetalleEntity() {
	}

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

}
