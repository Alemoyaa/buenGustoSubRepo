package com.utn.app.buenGusto.DTO;

public class DetallePedidoDTO extends CommonDTO {
	
	private static final long serialVersionUID = 1L;
	
	private int cantidad; 
	private double subtotal; 
	
	private ArticuloInsumoDTO articulo;

	private ArticuloManufacturadoDTO articuloManufacturado;

	private FacturaDTO factura;

	private PedidoDTO pedido;

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

	public ArticuloInsumoDTO getArticulo() {
		return articulo;
	}

	public void setArticulo(ArticuloInsumoDTO articulo) {
		this.articulo = articulo;
	}

	public ArticuloManufacturadoDTO getArticuloManufacturado() {
		return articuloManufacturado;
	}

	public void setArticuloManufacturado(ArticuloManufacturadoDTO articuloManufacturado) {
		this.articuloManufacturado = articuloManufacturado;
	}

	public FacturaDTO getFactura() {
		return factura;
	}

	public void setFactura(FacturaDTO factura) {
		this.factura = factura;
	}

	public PedidoDTO getPedido() {
		return pedido;
	}

	public void setPedido(PedidoDTO pedido) {
		this.pedido = pedido;
	}
  
	

}
