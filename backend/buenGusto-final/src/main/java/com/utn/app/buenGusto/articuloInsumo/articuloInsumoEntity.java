package com.utn.app.buenGusto.articuloInsumo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotEmpty;

import com.utn.app.buenGusto.articuloManufacturadoDetalle.articuloManufacturadoDetalleEntity;
import com.utn.app.buenGusto.commons.commonEntity;
import com.utn.app.buenGusto.detallePedido.detallePedidoEntity;

@Entity
@Table(name = "articulo_insumo")
public class articuloInsumoEntity extends commonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	@NotEmpty
	private String denominacion;
	
	@NotEmpty
	private double precioCompra;
	
	@NotEmpty
	private double precioVenta;
	
	@NotEmpty
	private double stockActual;
	
	@NotEmpty
	private double stockMinimo;
	
	@NotEmpty
	private String unidadMedida;
	
	@NotEmpty
	private boolean esInsumo;
	
	
	 // relacion OneToMany bidireccional ArticuloInsumo -- ArticuloManufacturadoDetalle
	 @OneToMany(mappedBy = "articuloInsumo",cascade = CascadeType.ALL, orphanRemoval = true)
	    private List<articuloManufacturadoDetalleEntity> articuloManufacturadoDetalle = new ArrayList<>();    

	 // relacion OneToMany bidireccional ArticuloInsumo -- DetallePedido
		 @OneToMany(mappedBy = "articuloInsumo",cascade = CascadeType.ALL, orphanRemoval = true)
		    private List<detallePedidoEntity> detallePedido = new ArrayList<>();
	    
	
		    
	public articuloInsumoEntity() {
		
	}
	public articuloInsumoEntity(@NotEmpty String denominacion, @NotEmpty double precioCompra,
			@NotEmpty double precioVenta, @NotEmpty double stockActual, @NotEmpty double stockMinimo,
			@NotEmpty String unidadMedida, @NotEmpty boolean esInsumo,
			List<articuloManufacturadoDetalleEntity> articuloManufacturadoDetalle,
			List<detallePedidoEntity> detallePedido) {
		
		this.denominacion = denominacion;
		this.precioCompra = precioCompra;
		this.precioVenta = precioVenta;
		this.stockActual = stockActual;
		this.stockMinimo = stockMinimo;
		this.unidadMedida = unidadMedida;
		this.esInsumo = esInsumo;
		this.articuloManufacturadoDetalle = articuloManufacturadoDetalle;
		this.detallePedido = detallePedido;
	}
	public List<articuloManufacturadoDetalleEntity> getArticuloManufacturadoDetalle() {
			return articuloManufacturadoDetalle;
		}
		public void setArticuloManufacturadoDetalle(List<articuloManufacturadoDetalleEntity> articuloManufacturadoDetalle) {
			this.articuloManufacturadoDetalle = articuloManufacturadoDetalle;
		}
		public List<detallePedidoEntity> getDetallePedido() {
			return detallePedido;
		}
		public void setDetallePedido(List<detallePedidoEntity> detallePedido) {
			this.detallePedido = detallePedido;
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
