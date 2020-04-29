package com.utn.app.buenGusto.detallePedido;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity; 
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne; 
import javax.persistence.Table;
 
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.pedido.PedidoEntity;

@Entity
@Table(name = "detalle_pedido")
public class DetallePedidoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -7168593642662662191L;

	private int cantidad;
	private double subtotal;

	// ---------Pedido---------
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "pedido_id")
	private PedidoEntity pedido;



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

	public PedidoEntity getPedido() {
		return pedido;
	}

	public void setPedido(PedidoEntity pedido) {
		this.pedido = pedido;
	}
 
}
