package com.utn.app.buenGusto.detalleManufacturado;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

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

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "unidad_medida_id")
	private UnidadMedidaEntity unidadMedidaID;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "articulo_insumo_id")
	private ArticuloInsumoEntity articuloInsumoID;
	
	@Transient
	private double subCosto;

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

	public double calcularSubCosto(DetalleManufacturadoEntity entidad) {
		double result = 0.0d;
		if(entidad.articuloInsumoID == null || entidad.unidadMedidaID == null) {
			return result;
		}else {
			result = entidad.articuloInsumoID.getPrecio_de_compra() * (entidad.cantidad * entidad.unidadMedidaID.getEquivalencia_KgOL());
		}
		return result;
	}

	public void setSubCosto(double subCosto) {
		this.subCosto = subCosto;
	}

	public double getSubCosto() {
		return subCosto;
	}
	
}
