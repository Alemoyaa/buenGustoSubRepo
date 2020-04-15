package com.utn.app.buenGusto.detallePedido;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity; 
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table; 

import com.utn.app.buenGusto.articuloInsumo.articuloInsumoEntity;
import com.utn.app.buenGusto.articuloManufacturado.articuloManufacturadoEntity;
import com.utn.app.buenGusto.commons.commonEntity;
import com.utn.app.buenGusto.factura.facturaEntity;
import com.utn.app.buenGusto.pedido.pedidoEntity;

@Entity
@Table(name = "detalle_pedido")
public class detallePedidoEntity extends commonEntity implements Serializable {

	private static final long serialVersionUID = -7168593642662662191L;
 
	private int cantidad; 
	private double subtotal;

	// ---------pedido---------
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "pedido_id")
	private pedidoEntity pedido;

	// ----------factura----------
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "factura_id")
	private facturaEntity facturaDetalle;

	// relacion ManyToOne bidireccional detallePedido --- ArticuloManufacturado
	@ManyToOne(cascade = CascadeType.ALL) // trae atributos y sus correspondientes relaciones
	@JoinColumn(name = "detallePedido_fk_articuloManufacturado")
	private articuloManufacturadoEntity articuloManufacturado;

	// relacion ManyToOne bidireccional detallePedido --- ArticuloManufacturado
	@ManyToOne(cascade = CascadeType.ALL) // trae atributos y sus correspondientes relaciones
	@JoinColumn(name = "detallePedido_fk_articuloInsumo")
	private articuloInsumoEntity articuloInsumo;
 
	

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

	public facturaEntity getFacturaDetalle() {
		return facturaDetalle;
	}


	public void setFacturaDetalle(facturaEntity facturaDetalle) {
		this.facturaDetalle = facturaDetalle;
	}


	public articuloManufacturadoEntity getArticuloManufacturado() {
		return articuloManufacturado;
	}


	public void setArticuloManufacturado(articuloManufacturadoEntity articuloManufacturado) {
		this.articuloManufacturado = articuloManufacturado;
	}


	public articuloInsumoEntity getArticuloInsumo() {
		return articuloInsumo;
	}


	public void setArticuloInsumo(articuloInsumoEntity articuloInsumo) {
		this.articuloInsumo = articuloInsumo;
	}

	public pedidoEntity getPedido() {
		return pedido;
	}

	public void setPedido(pedidoEntity pedido) {
		this.pedido = pedido;
	}

	
  
}
