package com.utn.app.buenGusto.detallePedido;

import com.utn.app.buenGusto.articulo.ArticuloDTO;
import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.pedido.PedidoDTO;

public class DetallePedidoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private int cantidad;
	private double subtotal;
 

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
