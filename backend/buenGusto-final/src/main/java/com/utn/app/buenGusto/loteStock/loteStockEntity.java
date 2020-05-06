package com.utn.app.buenGusto.loteStock;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.stockArticulo.stockArticuloEntity;

@Entity
@Table(name = "lote_stock")
public class loteStockEntity extends CommonEntity implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private long numeroLote;
	private long cantidadActual;
	private long cantidadComprada;
	private String unidadMedida;
	private Date fechaCompra;
	private Date fechaVencimiento;

	@OneToOne(/*cascade = CascadeType.ALL*/)
	@JoinColumn(name = "stock_articulo_id")
	private stockArticuloEntity stockArticulo;

	public stockArticuloEntity getStockArticulo() {
		return stockArticulo;
	}

	public void setStockArticulo(stockArticuloEntity stockArticulo) {
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

}
