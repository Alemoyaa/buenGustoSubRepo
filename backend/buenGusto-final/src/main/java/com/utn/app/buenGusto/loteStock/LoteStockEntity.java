package com.utn.app.buenGusto.loteStock;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.utn.app.buenGusto.unidadMedida.UnidadMedidaEntity;

@Entity
@Table(name = "lote_stock")
public class LoteStockEntity implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;
	private long numeroLote;
	private float cantidadActual;
	private float cantidadComprada;
	private double precio_de_compra;
	private Date fechaCompra;
	private Date fechaVencimiento;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "unidad_medida_id")
	private UnidadMedidaEntity unidadMedidaID;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getNumeroLote() {
		return numeroLote;
	}

	public void setNumeroLote(long numeroLote) {
		this.numeroLote = numeroLote;
	}

	public float getCantidadActual() {
		return cantidadActual;
	}

	public void setCantidadActual(float cantidadActual) {
		this.cantidadActual = cantidadActual;
	}

	public float getCantidadComprada() {
		return cantidadComprada;
	}

	public void setCantidadComprada(float cantidadComprada) {
		this.cantidadComprada = cantidadComprada;
	}

	public double getPrecio_de_compra() {
		return precio_de_compra;
	}

	public void setPrecio_de_compra(double precio_de_compra) {
		this.precio_de_compra = precio_de_compra;
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

	public UnidadMedidaEntity getUnidadMedidaID() {
		return unidadMedidaID;
	}

	public void setUnidadMedidaID(UnidadMedidaEntity unidadMedidaID) {
		this.unidadMedidaID = unidadMedidaID;
	}

}
