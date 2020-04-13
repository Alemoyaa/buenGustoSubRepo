package com.utn.app.buenGusto.detallePedido;

import com.utn.app.buenGusto.articuloInsumo.articuloInsumoEntity;
import com.utn.app.buenGusto.articuloManufacturado.articuloManufacturadoEntity;
import com.utn.app.buenGusto.commons.commonDTO;
import com.utn.app.buenGusto.factura.facturaEntity;
import com.utn.app.buenGusto.pedido.pedidoEntity;

public class detallePedidoDTO extends commonDTO {
	
	
	private int cantidad; 
	private double subtotal; 
	
	
	
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

}
