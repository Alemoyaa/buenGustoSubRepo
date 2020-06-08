package com.utn.app.buenGusto.stockArticulo;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.utn.app.buenGusto.articuloInsumo.ArticuloInsumoEntity;
import com.utn.app.buenGusto.loteStock.LoteStockEntity;
import com.utn.app.buenGusto.unidadMedida.UnidadMedidaEntity;

@Entity
@Table(name = "stock_articulo")
public class StockArticuloEntity implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;
	private double costoActual;
	private float stockActual;
	private float stockMinimo;
	private float stockMaximo;

	@OneToMany(mappedBy = "stockArticulo", cascade = CascadeType.ALL)
	private List<LoteStockEntity> lista_Lote_Stock;

	@OneToOne(/* cascade = CascadeType.ALL */)
	@JoinColumn(name = "unidad_medida_id")
	private UnidadMedidaEntity unidadMedidaID;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public double getCostoActual() {
		return costoActual;
	}

	public void setCostoActual(double costoActual) {
		this.costoActual = costoActual;
	}

	public float getStockActual() {
		return stockActual;
	}

	public void setStockActual(float stockActual) {
		this.stockActual = stockActual;
	}

	public float getStockMinimo() {
		return stockMinimo;
	}

	public void setStockMinimo(float stockMinimo) {
		this.stockMinimo = stockMinimo;
	}

	public float getStockMaximo() {
		return stockMaximo;
	}

	public void setStockMaximo(float stockMaximo) {
		this.stockMaximo = stockMaximo;
	}

	public List<LoteStockEntity> getLista_Lote_Stock() {
		return lista_Lote_Stock;
	}

	public void setLista_Lote_Stock(List<LoteStockEntity> lista_Lote_Stock) {
		this.lista_Lote_Stock = lista_Lote_Stock;
	}

	public UnidadMedidaEntity getUnidadMedidaID() {
		return unidadMedidaID;
	}

	public void setUnidadMedidaID(UnidadMedidaEntity unidadMedidaID) {
		this.unidadMedidaID = unidadMedidaID;
	}

}
