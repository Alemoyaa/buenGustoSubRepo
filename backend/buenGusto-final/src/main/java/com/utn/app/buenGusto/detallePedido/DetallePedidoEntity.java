package com.utn.app.buenGusto.detallePedido;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.articulo.ArticuloEntity;

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
	
	@ManyToOne(optional=false/*, cascade = CascadeType.ALL, fetch = FetchType.LAZY*/)
	@JoinColumn(name = "articulo_id")
	private ArticuloEntity Articulo;

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

	public ArticuloEntity getArticulo() {
		return Articulo;
	}

	public void setArticulo(ArticuloEntity articulo) {
		Articulo = articulo;
	} 

}
