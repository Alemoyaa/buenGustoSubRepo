package com.utn.app.buenGusto.stockArticulo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.utn.app.buenGusto.articuloInsumo.ArticuloInsumoEntity;

@Entity
@Table(name = "stock_articulo")
public class StockArticuloEntity implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private double costoActual;
	private double stockActual;
	private double stockMinimo;
	private double stockMaximo;
	private String unidadMedida;
	
	@OneToOne
	@JoinColumn(name = "articulo_insumo_id")
	@JsonIgnoreProperties("stockArticulo")
	private ArticuloInsumoEntity articuloInsumoStock;

	public ArticuloInsumoEntity getArticuloInsumoStock() {
		return articuloInsumoStock;
	}

	public void setArticuloInsumoStock(ArticuloInsumoEntity articuloInsumoStock) {
		this.articuloInsumoStock = articuloInsumoStock;
	}

	public double getCostoActual() {
		return costoActual;
	}

	public void setCostoActual(double costoActual) {
		this.costoActual = costoActual;
	}

	public double getStockActual() {
		return stockActual;
	}

	public void setStockActual(double stockActual) {
		this.stockActual = stockActual;
	}

	public double getStockMinimo() {
		return stockMinimo;
	}

	public void setStockMinimo(double stockMinimo) {
		this.stockMinimo = stockMinimo;
	}

	public double getStockMaximo() {
		return stockMaximo;
	}

	public void setStockMaximo(double stockMaximo) {
		this.stockMaximo = stockMaximo;
	}

	public String getUnidadMedida() {
		return unidadMedida;
	}

	public void setUnidadMedida(String unidadMedida) {
		this.unidadMedida = unidadMedida;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
}
