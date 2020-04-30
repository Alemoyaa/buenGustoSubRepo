package com.utn.app.buenGusto.loteStock;

import java.util.Date;
  
import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.stockArticulo.stockArticuloDTO;

public class loteStockDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private long numeroLote;

	private long cantidadActual;

	private long cantidadComprada;

	private String unidadMedida;

	private Date fechaCompra;

	private Date fechaVencimiento;

	private stockArticuloDTO stockArticulo;

	public stockArticuloDTO getStockArticulo() {
		return stockArticulo;
	}

	public void setStockArticulo(stockArticuloDTO stockArticulo) {
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
