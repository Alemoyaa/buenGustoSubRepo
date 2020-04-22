package com.utn.app.buenGusto.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "receta_detalle")
public class RecetaDetalleEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private double cantidad;
	private String unidadMedida;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "receta_id")
	private RecetaEntity receta;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "articulo_id")
	private ArticuloInsumoEntity articuloinsumo;

	public RecetaEntity getReceta() {
		return receta;
	}

	public void setReceta(RecetaEntity receta) {
		this.receta = receta;
	}

	public ArticuloInsumoEntity getArticuloinsumo() {
		return articuloinsumo;
	}

	public void setArticuloinsumo(ArticuloInsumoEntity articuloinsumo) {
		this.articuloinsumo = articuloinsumo;
	}

	public double getCantidad() {
		return cantidad;
	}

	public void setCantidad(double cantidad) {
		this.cantidad = cantidad;
	}

	public String getUnidadMedida() {
		return unidadMedida;
	}

	public void setUnidadMedida(String unidadMedida) {
		this.unidadMedida = unidadMedida;
	}

}
