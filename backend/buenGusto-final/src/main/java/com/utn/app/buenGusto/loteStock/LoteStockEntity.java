package com.utn.app.buenGusto.loteStock;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.utn.app.buenGusto.stockArticulo.StockArticuloEntity;

@Entity
@Table(name = "lote_stock")
public class LoteStockEntity implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private long numeroLote;
	private long cantidadActual;
	private long cantidadComprada;
	private String unidadMedida;
	private Date fechaCompra;
	private Date fechaVencimiento;

	@OneToOne(/*cascade = CascadeType.ALL*/)
	@JoinColumn(name = "stock_articulo_id")
	private StockArticuloEntity stockArticulo;

	public StockArticuloEntity getStockArticulo() {
		return stockArticulo;
	}

	public void setStockArticulo(StockArticuloEntity stockArticulo) {
		this.stockArticulo = stockArticulo;
	}

	public long getNumeroLote() {
		return numeroLote;
	}

	public void setNumeroLote(long numeroLote) {
		this.numeroLote = numeroLote;
	}

	public long getCantidadActual() {
		return cantidadActual;
	}

	public void setCantidadActual(long cantidadActual) {
		this.cantidadActual = cantidadActual;
	}

	public long getCantidadComprada() {
		return cantidadComprada;
	}

	public void setCantidadComprada(long cantidadComprada) {
		this.cantidadComprada = cantidadComprada;
	}

	public String getUnidadMedida() {
		return unidadMedida;
	}

	public void setUnidadMedida(String unidadMedida) {
		this.unidadMedida = unidadMedida;
	}

	public Date getFechaCompra() {
		return fechaCompra;
	}

	public void setFechaCompra(Date fechaCompra) {
		this.fechaCompra = fechaCompra;
	}

	public Date getFechaVencimiento() {
		return fechaVencimiento;
	}

	public void setFechaVencimiento(Date fechaVencimiento) {
		this.fechaVencimiento = fechaVencimiento;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
