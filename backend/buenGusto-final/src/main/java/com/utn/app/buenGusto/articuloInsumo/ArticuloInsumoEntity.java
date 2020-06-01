package com.utn.app.buenGusto.articuloInsumo;

import java.io.Serializable; 

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.stockArticulo.StockArticuloEntity;

@Entity
@Table(name = "articulo_insumo")
public class ArticuloInsumoEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private double costo_de_venta;
	private boolean requiere_refrigeracion;

	@OneToOne(/* cascade = CascadeType.ALL */)
	@JoinColumn(name = "stock_articulo_id")
	private StockArticuloEntity stockArticulo;

	public double getCosto_de_venta() {
		return costo_de_venta;
	}

	public void setCosto_de_venta(double costo_de_venta) {
		this.costo_de_venta = costo_de_venta;
	}

	public boolean isRequiere_refrigeracion() {
		return requiere_refrigeracion;
	}

	public void setRequiere_refrigeracion(boolean requiere_refrigeracion) {
		this.requiere_refrigeracion = requiere_refrigeracion;
	}

	public StockArticuloEntity getStockArticulo() {
		return stockArticulo;
	}

	public void setStockArticulo(StockArticuloEntity stockArticulo) {
		this.stockArticulo = stockArticulo;
	}

}
