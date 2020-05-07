package com.utn.app.buenGusto.factura;

import java.util.Date;

import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.formaPago.FormaPagoDTO;
import com.utn.app.buenGusto.pedido.PedidoDTO;

public class FacturaDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private int nro_factura;
	private Date fecha;
	private double total;
	
	private FormaPagoDTO formaPago;
	
	private PedidoDTO pedido;
 
	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
 
	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public PedidoDTO getPedido() {
		return pedido;
	}

	public void setPedido(PedidoDTO pedido) {
		this.pedido = pedido;
	}

	public int getNro_factura() {
		return nro_factura;
	}

	public void setNro_factura(int nro_factura) {
		this.nro_factura = nro_factura;
	}

	public FormaPagoDTO getFormaPago() {
		return formaPago;
	}

	public void setFormaPago(FormaPagoDTO formaPago) {
		this.formaPago = formaPago;
	}
	 
}
