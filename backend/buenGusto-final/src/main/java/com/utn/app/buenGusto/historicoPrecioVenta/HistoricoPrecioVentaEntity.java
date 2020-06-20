package com.utn.app.buenGusto.historicoPrecioVenta;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.articulo.ArticuloEntity;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "historicoPrecioVenta")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class HistoricoPrecioVentaEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "articulo_id")
	private ArticuloEntity articulo;
	
	private double precio_de_venta;
	
	private Date fecha_modificacion;

	public ArticuloEntity getArticulo() {
		return articulo;
	}

	public void setArticulo(ArticuloEntity articulo) {
		this.articulo = articulo;
	}

	public double getPrecio_de_venta() {
		return precio_de_venta;
	}

	public void setPrecio_de_venta(double precio_de_venta) {
		this.precio_de_venta = precio_de_venta;
	}

	public Date getFecha_modificacion() {
		return fecha_modificacion;
	}

	public void setFecha_modificacion(Date fecha_modificacion) {
		this.fecha_modificacion = fecha_modificacion;
	}
	
}
