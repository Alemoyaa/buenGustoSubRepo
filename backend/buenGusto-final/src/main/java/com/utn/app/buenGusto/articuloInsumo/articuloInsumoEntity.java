package com.utn.app.buenGusto.articuloInsumo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table; 

import com.utn.app.buenGusto.articuloManufacturadoDetalle.articuloManufacturadoDetalleEntity;
import com.utn.app.buenGusto.commons.commonEntity;
import com.utn.app.buenGusto.detallePedido.detallePedidoEntity;
import com.utn.app.buenGusto.rubroArticulo.rubroArticuloEntity;

@Entity
@Table(name = "articulo_insumo")
public class articuloInsumoEntity extends commonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private String denominacion;
	private double precioCompra;
	private double precioVenta;
	private double stockActual;
	private double stockMinimo;
	private String unidadMedida;
	private boolean esInsumo;
/*
	// relacion OneToMany bidireccional ArticuloInsumo --
	// ArticuloManufacturadoDetalle
	@OneToMany(mappedBy = "articuloInsumo", fetch = FetchType.LAZY, orphanRemoval = true)
	private List<articuloManufacturadoDetalleEntity> articuloManufacturadoDetalle = new ArrayList<>();

	
	// relacion OneToMany bidireccional ArticuloInsumo -- DetallePedido
	@OneToMany(mappedBy = "articuloInsumo", fetch = FetchType.LAZY, orphanRemoval = true)
	private List<detallePedidoEntity> detallePedido = new ArrayList<>();
	

	//rubrosArticulo
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name= "articuloInsumo_fk_rubroArticulo")
	private rubroArticuloEntity rubrosArticulo;
	
	*/
	public articuloInsumoEntity() {

	} 
	public String getDenominacion() {
		return denominacion;
	}
	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}
	public double getPrecioCompra() {
		return precioCompra;
	}
	public void setPrecioCompra(double precioCompra) {
		this.precioCompra = precioCompra;
	}
	public double getPrecioVenta() {
		return precioVenta;
	}
	public void setPrecioVenta(double precioVenta) {
		this.precioVenta = precioVenta;
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
	public String getUnidadMedida() {
		return unidadMedida;
	}
	public void setUnidadMedida(String unidadMedida) {
		this.unidadMedida = unidadMedida;
	}
	public boolean isEsInsumo() {
		return esInsumo;
	}
	public void setEsInsumo(boolean esInsumo) {
		this.esInsumo = esInsumo;
	}
}
