package com.utn.app.buenGusto.detallePedido;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.articulo.ArticuloEntity;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "detalle_pedido")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class DetallePedidoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -7168593642662662191L;

	private int cantidad;
	
	@Transient
	private double subtotal = 0.0d;

	@ManyToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "articulo_id")
	private ArticuloEntity articulo;

	public DetallePedidoEntity() {
		super();
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
		this.calcularSubtotal();
	}

	public double getSubtotal() {
		return subtotal;
	}

	//Revisar si sigue haciendo falta o lo borramos
	public void setSubtotal(double subtotal) {
		//this.subtotal = subtotal;
		this.subtotal = this.articulo.getPrecio_de_venta()*this.cantidad;
	}

	public ArticuloEntity getArticulo() {
		return articulo;
	}

	public void setArticulo(ArticuloEntity articulo) {
		this.articulo = articulo;
		this.calcularSubtotal();
	}
	
	public void calcularSubtotal() {
		this.subtotal = this.articulo.getPrecio_de_venta()*this.cantidad;
	}

}
