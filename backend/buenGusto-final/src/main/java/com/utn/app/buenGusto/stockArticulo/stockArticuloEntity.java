package com.utn.app.buenGusto.stockArticulo;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.articuloInsumo.ArticuloInsumoEntity;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "stock_articulo")
public class stockArticuloEntity extends CommonEntity implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private double costoActual;

	private double stockActual;

	private double stockMinimo;

	private double stockMaximo;

	private String unidadMedida;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "articulo_insumo_id")
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
	
}
