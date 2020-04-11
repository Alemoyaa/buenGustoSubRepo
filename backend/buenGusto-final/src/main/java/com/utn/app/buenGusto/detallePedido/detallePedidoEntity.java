package com.utn.app.buenGusto.detallePedido;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.utn.app.buenGusto.articuloInsumo.articuloInsumoEntity;
import com.utn.app.buenGusto.articuloManufacturado.articuloManufacturadoEntity;
import com.utn.app.buenGusto.commons.commonEntity;
import com.utn.app.buenGusto.factura.facturaEntity;
import com.utn.app.buenGusto.pedido.pedidoEntity;

@Entity
@Table(name = "detalle_pedido")
public class detallePedidoEntity extends commonEntity implements Serializable{

	private static final long serialVersionUID = -7168593642662662191L;

	@NotEmpty
	private int cantidad;
	
	@NotEmpty
	private double subtotal;
	
	//---------pedido---------
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "pedido_id", nullable = false)
	private pedidoEntity pedido;

	//----------factura----------
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "factura_id", nullable = false)
	private facturaEntity facturaDetalle;
	
	
	// relacion ManyToOne bidireccional detallePedido --- ArticuloManufacturado
    @ManyToOne(fetch = FetchType.EAGER) //trae atributos y sus correspondientes relaciones
    @JoinColumn(name= "detallePedido_fk_articuloManufacturado")
    private articuloManufacturadoEntity articuloManufacturado;
	
    
 // relacion ManyToOne bidireccional detallePedido --- ArticuloManufacturado
    @ManyToOne(fetch = FetchType.EAGER) //trae atributos y sus correspondientes relaciones
    @JoinColumn(name= "detallePedido_fk_articuloInsumo")
    private articuloInsumoEntity articuloInsumo;
    
    
	
	public detallePedidoEntity() {
		
	}

	public detallePedidoEntity(@NotEmpty int cantidad, @NotEmpty double subtotal, pedidoEntity pedido,
			facturaEntity facturaDetalle, articuloManufacturadoEntity articuloManufacturado) {
		
		this.cantidad = cantidad;
		this.subtotal = subtotal;
		this.pedido = pedido;
		this.facturaDetalle = facturaDetalle;
		this.articuloManufacturado = articuloManufacturado;
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
