package com.utn.app.buenGusto.detalleManufacturado;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.articuloInsumo.ArticuloInsumoEntity;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.unidadMedida.UnidadMedidaEntity;

@Entity
@Table(name = "detalle_manufacturado")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class DetalleManufacturadoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -9170291124448277621L;

	private int cantidad;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "unidad_medida_id")
	private UnidadMedidaEntity unidadMedidaID;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "articulo_insumo_id")
	private ArticuloInsumoEntity articuloInsumoID;

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

}
