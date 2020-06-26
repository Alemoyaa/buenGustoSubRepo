package com.utn.app.buenGusto.detallePedido;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	
	private String aclaracion;

	public String getAclaracion() {
		return aclaracion;
	}

	public void setAclaracion(String aclaracion) {
		this.aclaracion = aclaracion;
	}

	@ManyToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "articulo_id")
	private ArticuloEntity articulo;

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public double getSubtotal() throws Exception {
		double result = 0.0d;
		if(this.articulo == null) {
			return result;
		}else {
			result = this.articulo.getPrecio_de_venta() * this.cantidad;
		}
		return result;
	}

	public void setSubtotal(double subtotal) {
		this.subtotal = subtotal;
	}

	public ArticuloEntity getArticulo() {
		return articulo;
	}

	public void setArticulo(ArticuloEntity articulo) {
		this.articulo = articulo;
	}

}
