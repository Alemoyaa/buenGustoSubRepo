package com.utn.app.buenGusto.detallePedido;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.articuloInsumo.ArticuloInsumoEntity;
import com.utn.app.buenGusto.articuloManufacturado.ArticuloManufacturadoEntity;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "detalle_pedido")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class DetallePedidoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -7168593642662662191L;

	private int cantidad;
	private double subtotal;
	private String aclaracion;
	private boolean esInsumo;

	@ManyToOne(optional = true)
	@JoinColumn(name = "articuloinsumo_id")
	private ArticuloInsumoEntity articuloInsumo;
	
	@ManyToOne(optional = true)
	@JoinColumn(name = "articulomanufacturado_id")
	private ArticuloManufacturadoEntity articuloManufacturado;
	
	public String getAclaracion() {
		return aclaracion;
	}

	public void setAclaracion(String aclaracion) {
		this.aclaracion = aclaracion;
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
	
	public double calcularSubtotal() {
		double result = 0.0d;
		if(this.articuloInsumo == null && this.articuloManufacturado == null) {
			return result;
		}else if(this.esInsumo){
			result = this.articuloInsumo.getPrecio_de_venta() * this.cantidad;
		}else {
			result = this.articuloManufacturado.getPrecio_de_venta() * this.cantidad;
		}
		return result;
	}

	public void setSubtotal(double subtotal) {
		this.subtotal = subtotal;
	}

	public boolean isEsInsumo() {
		return esInsumo;
	}

	public void setEsInsumo(boolean esInsumo) {
		this.esInsumo = esInsumo;
	}

	public ArticuloInsumoEntity getArticuloInsumo() {
		return articuloInsumo;
	}

	public void setArticuloInsumo(ArticuloInsumoEntity articuloInsumo) {
		this.articuloInsumo = articuloInsumo;
	}

	public ArticuloManufacturadoEntity getArticuloManufacturado() {
		return articuloManufacturado;
	}

	public void setArticuloManufacturado(ArticuloManufacturadoEntity articuloManufacturado) {
		this.articuloManufacturado = articuloManufacturado;
	}

	public void descontarStock() {
		if(this.isEsInsumo()) {
			this.articuloInsumo.descontarStock(this.cantidad); 
		}else {
			this.articuloManufacturado.descontarStock(this.cantidad); 
		}
	}
	
	public boolean stockSuficiente() {
		if(this.isEsInsumo()) {
			return this.articuloInsumo.comprobarStock(this.cantidad);
		}else {
			return this.articuloManufacturado.comprobarStock(this.cantidad);
		}
	} 
	 
}
