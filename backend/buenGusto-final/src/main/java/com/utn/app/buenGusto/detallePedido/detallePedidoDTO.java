package com.utn.app.buenGusto.detallePedido;

import com.utn.app.buenGusto.articuloInsumo.articuloInsumoEntity;
import com.utn.app.buenGusto.articuloManufacturado.articuloManufacturadoEntity;
import com.utn.app.buenGusto.commons.commonDTO;
import com.utn.app.buenGusto.factura.facturaEntity;
import com.utn.app.buenGusto.pedido.pedidoEntity;

public class detallePedidoDTO extends commonDTO {
	
	
	private int cantidad; 
	private double subtotal;
	
	private pedidoEntity pedido;
	private facturaEntity facturaDetalle;
	private articuloManufacturadoEntity articuloManufacturado;
	private articuloInsumoEntity articuloInsumo;
	
	
	
	
	
	public detallePedidoDTO() {
		super();
	}
	public detallePedidoDTO(int cantidad, double subtotal, pedidoEntity pedido, facturaEntity facturaDetalle,
			articuloManufacturadoEntity articuloManufacturado, articuloInsumoEntity articuloInsumo) {
		super();
		this.cantidad = cantidad;
		this.subtotal = subtotal;
		this.pedido = pedido;
		this.facturaDetalle = facturaDetalle;
		this.articuloManufacturado = articuloManufacturado;
		this.articuloInsumo = articuloInsumo;
	}
	public int getCantidad() {
		return cantidad;
	}
	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	public double getSubtotal() {
		return subtotal;
	}
	public void setSubtotal(double subtotal) {
		this.subtotal = subtotal;
	}
	public pedidoEntity getPedido() {
		return pedido;
	}
	public void setPedido(pedidoEntity pedido) {
		this.pedido = pedido;
	}
	public facturaEntity getFacturaDetalle() {
		return facturaDetalle;
	}
	public void setFacturaDetalle(facturaEntity facturaDetalle) {
		this.facturaDetalle = facturaDetalle;
	}
	public articuloManufacturadoEntity getArticuloManufacturado() {
		return articuloManufacturado;
	}
	public void setArticuloManufacturado(articuloManufacturadoEntity articuloManufacturado) {
		this.articuloManufacturado = articuloManufacturado;
	}
	public articuloInsumoEntity getArticuloInsumo() {
		return articuloInsumo;
	}
	public void setArticuloInsumo(articuloInsumoEntity articuloInsumo) {
		this.articuloInsumo = articuloInsumo;
	}
	
	
	
	
	

}
