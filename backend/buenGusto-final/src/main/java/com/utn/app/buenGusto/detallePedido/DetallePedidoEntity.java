package com.utn.app.buenGusto.detallePedido;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.articuloInsumo.ArticuloInsumoEntity;
import com.utn.app.buenGusto.articuloManufacturado.ArticuloManufacturadoEntity;
import com.utn.app.buenGusto.cabezaPedido.CabezaPedidoEntity;
import com.utn.app.buenGusto.pedido.PedidoEntity;

@Entity
@Table(name = "detalle_pedido")
public class DetallePedidoEntity implements Serializable {

	private static final long serialVersionUID = -7168593642662662191L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;

	private int cantidad;
	private double subtotal;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Cabeza_Pedido_id")
	private CabezaPedidoEntity cabezaPedido;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public CabezaPedidoEntity getCabezaPedido() {
		return cabezaPedido;
	}

	public void setCabezaPedido(CabezaPedidoEntity cabezaPedido) {
		this.cabezaPedido = cabezaPedido;
	}

}
