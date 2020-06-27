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

	@ManyToOne(cascade = CascadeType.ALL, optional = true)
	@JoinColumn(name = "articuloinsumo_id")
	private ArticuloInsumoEntity articuloInsumo;
	
	@ManyToOne(cascade = CascadeType.ALL, optional = true)
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
	
	public double calcularSubtotal(DetallePedidoEntity detalleAcalcular) {
		double result = 0.0d;
		if(detalleAcalcular.articuloInsumo == null && detalleAcalcular.articuloManufacturado == null) {
			return result;
		}else if(detalleAcalcular.esInsumo && detalleAcalcular.articuloInsumo.isEs_catalogo()){
			result = detalleAcalcular.articuloInsumo.getPrecio_de_venta() * detalleAcalcular.cantidad;
		}else {
			result = detalleAcalcular.articuloManufacturado.getPrecio_de_venta() * detalleAcalcular.cantidad;
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

}
