package com.utn.app.buenGusto.articuloInsumo;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.articulo.ArticuloEntity;
import com.utn.app.buenGusto.unidadMedida.UnidadMedidaEntity;

@Entity
@Table(name = "articulo_insumo")
@PrimaryKeyJoinColumn(name = "articulo_insumo_Id")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ArticuloInsumoEntity extends ArticuloEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;
	
	//suponemos que el precio_de_compra es por Kg o por L o por Unidad del Insumo
	private double precio_de_compra;
	private boolean requiere_refrigeracion;
	private float stock_actual;
	private float stock_minimo;
	private float stock_maximo;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "unidad_medida_id")
	private UnidadMedidaEntity unidadMedidaID;

	public boolean isRequiere_refrigeracion() {
		return requiere_refrigeracion;
	}

	public void setRequiere_refrigeracion(boolean requiere_refrigeracion) {
		this.requiere_refrigeracion = requiere_refrigeracion;
	}

	public float getStock_actual() {
		return stock_actual;
	}

	public void setStock_actual(float stock_actual) {
		this.stock_actual = stock_actual;
	}

	public float getStock_minimo() {
		return stock_minimo;
	}

	public void setStock_minimo(float stock_minimo) {
		this.stock_minimo = stock_minimo;
	}

	public float getStock_maximo() {
		return stock_maximo;
	}

	public void setStock_maximo(float stock_maximo) {
		this.stock_maximo = stock_maximo;
	}

	public UnidadMedidaEntity getUnidadMedidaID() {
		return unidadMedidaID;
	}

	public void setUnidadMedidaID(UnidadMedidaEntity unidadMedidaID) {
		this.unidadMedidaID = unidadMedidaID;
	}

	public double getPrecio_de_compra() {
		return precio_de_compra;
	}

	public void setPrecio_de_compra(double precio_de_compra) {
		this.precio_de_compra = precio_de_compra;
	}

}
