package com.utn.app.buenGusto.articuloInsumo;

import java.util.List;

import com.utn.app.buenGusto.commons.commonDTO;
import com.utn.app.buenGusto.detallePedido.detallePedidoEntity;

public class articuloInsumoDTO extends commonDTO {
	
	private String denominacion;
	private double precioCompra;
	private double precioVenta;
	private double stockActual;
	private double stockMinimo;
	private String unidadMedida;
	private boolean esInsumo;
	
	//relacion detallePedido
    private List<detallePedidoEntity> detallePedido;
    
    
    
    
    
	public articuloInsumoDTO() {
		super();
	}
	public articuloInsumoDTO(String denominacion, double precioCompra, double precioVenta, double stockActual,
			double stockMinimo, String unidadMedida, boolean esInsumo, List<detallePedidoEntity> detallePedido) {
		super();
		this.denominacion = denominacion;
		this.precioCompra = precioCompra;
		this.precioVenta = precioVenta;
		this.stockActual = stockActual;
		this.stockMinimo = stockMinimo;
		this.unidadMedida = unidadMedida;
		this.esInsumo = esInsumo;
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
	public List<detallePedidoEntity> getDetallePedido() {
		return detallePedido;
	}
	public void setDetallePedido(List<detallePedidoEntity> detallePedido) {
		this.detallePedido = detallePedido;
	}
    
    
    
}
