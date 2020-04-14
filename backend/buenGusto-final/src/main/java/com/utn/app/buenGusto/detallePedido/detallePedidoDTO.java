package com.utn.app.buenGusto.detallePedido;

import com.utn.app.buenGusto.articuloInsumo.articuloInsumoDTO; 
import com.utn.app.buenGusto.articuloManufacturado.articuloManufacturadoDTO;
import com.utn.app.buenGusto.commons.commonDTO;
import com.utn.app.buenGusto.factura.facturaDTO;
import com.utn.app.buenGusto.pedido.pedidoDTO;

public class detallePedidoDTO extends commonDTO {
	
	
	private int cantidad; 
	private double subtotal; 
	
	private articuloInsumoDTO articulo;

	private articuloManufacturadoDTO articuloManufacturado;

	private facturaDTO factura;

	private pedidoDTO pedido;

	public detallePedidoDTO() {
		super();
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

	public articuloInsumoDTO getArticulo() {
		return articulo;
	}

	public void setArticulo(articuloInsumoDTO articulo) {
		this.articulo = articulo;
	}

	public articuloManufacturadoDTO getArticuloManufacturado() {
		return articuloManufacturado;
	}

	public void setArticuloManufacturado(articuloManufacturadoDTO articuloManufacturado) {
		this.articuloManufacturado = articuloManufacturado;
	}

	public facturaDTO getFactura() {
		return factura;
	}

	public void setFactura(facturaDTO factura) {
		this.factura = factura;
	}

	public pedidoDTO getPedido() {
		return pedido;
	}

	public void setPedido(pedidoDTO pedido) {
		this.pedido = pedido;
	} 

}
