package com.utn.app.buenGusto.detallePedido;
 
import com.utn.app.buenGusto.articuloInsumo.ArticuloInsumoDTO;
import com.utn.app.buenGusto.articuloManufacturado.ArticuloManufacturadoDTO;
import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.pedido.PedidoDTO;

public class DetallePedidoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private int cantidad;
	private double subtotal; 
	private PedidoDTO pedido;  
	private boolean insumoOManuf;
	private ArticuloManufacturadoDTO articuloManufacturado;
	private ArticuloInsumoDTO articuloInsumo;

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

	public PedidoDTO getPedido() {
		return pedido;
	}

	public void setPedido(PedidoDTO pedido) {
		this.pedido = pedido; 
	}

	public ArticuloManufacturadoDTO getArticuloManufacturado() {
		return articuloManufacturado;
	}

	public void setArticuloManufacturado(ArticuloManufacturadoDTO articuloManufacturado) {
		this.articuloManufacturado = articuloManufacturado;
	}

	public ArticuloInsumoDTO getArticuloInsumo() {
		return articuloInsumo;
	}

	public void setArticuloInsumo(ArticuloInsumoDTO articuloInsumo) {
		this.articuloInsumo = articuloInsumo;
	}

	public boolean isInsumoOManuf() {
		return insumoOManuf;
	}

	public void setInsumoOManuf(boolean insumoOManuf) {
		this.insumoOManuf = insumoOManuf;
	} 
	
}