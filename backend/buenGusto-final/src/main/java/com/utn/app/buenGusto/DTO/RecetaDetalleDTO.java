package com.utn.app.buenGusto.DTO;

import com.utn.app.buenGusto.entities.RecetaEntity;
import com.utn.app.buenGusto.entities.ArticuloInsumoEntity;

public class RecetaDetalleDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private double cantidad;
	private String unidadMedida;

	private RecetaEntity receta;
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
