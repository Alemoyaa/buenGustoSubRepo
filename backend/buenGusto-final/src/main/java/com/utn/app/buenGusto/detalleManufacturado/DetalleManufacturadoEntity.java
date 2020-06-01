package com.utn.app.buenGusto.detalleManufacturado;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.articuloInsumo.ArticuloInsumoEntity;
import com.utn.app.buenGusto.articuloManufacturado.ArticuloManufacturadoEntity;
import com.utn.app.buenGusto.unidadMedida.UnidadMedidaEntity;

@Entity
@Table(name = "detalle_manufacturado")
public class DetalleManufacturadoEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -9170291124448277621L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;

	private int cantidad;

	@OneToOne(/* cascade = CascadeType.ALL */)
	@JoinColumn(name = "unidad_medida_id")
	private UnidadMedidaEntity unidadMedidaID;

	@OneToOne(/* cascade = CascadeType.ALL */)
	@JoinColumn(name = "articulo_insumo_id")
	private ArticuloInsumoEntity articuloInsumoID;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "articulo_manufacturado_id")
	private ArticuloManufacturadoEntity articuloManufacturadoID;

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

	public UnidadMedidaEntity getUnidadMedidaID() {
		return unidadMedidaID;
	}

	public void setUnidadMedidaID(UnidadMedidaEntity unidadMedidaID) {
		this.unidadMedidaID = unidadMedidaID;
	}

	public ArticuloInsumoEntity getArticuloInsumoID() {
		return articuloInsumoID;
	}

	public void setArticuloInsumoID(ArticuloInsumoEntity articuloInsumoID) {
		this.articuloInsumoID = articuloInsumoID;
	}

	public ArticuloManufacturadoEntity getArticuloManufacturadoID() {
		return articuloManufacturadoID;
	}

	public void setArticuloManufacturadoID(ArticuloManufacturadoEntity articuloManufacturadoID) {
		this.articuloManufacturadoID = articuloManufacturadoID;
	}

}
