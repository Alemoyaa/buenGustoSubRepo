package com.utn.app.buenGusto.detalleReceta;

import com.utn.app.buenGusto.articuloInsumo.ArticuloInsumoDTO;
import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.receta.RecetaDTO;
import com.utn.app.buenGusto.recetaInsumo.recetaInsumoDTO;

public class RecetaDetalleDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private double cantidad;
	private String unidadMedida;

	private RecetaDTO receta;
	private ArticuloInsumoDTO articuloinsumo;
	private recetaInsumoDTO recetaInsumo;

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

	public RecetaDTO getReceta() {
		return receta;
	}

	public void setReceta(RecetaDTO receta) {
		this.receta = receta;
	}

	public ArticuloInsumoDTO getArticuloinsumo() {
		return articuloinsumo;
	}

	public void setArticuloinsumo(ArticuloInsumoDTO articuloinsumo) {
		this.articuloinsumo = articuloinsumo;
	}

	public recetaInsumoDTO getRecetaInsumo() {
		return recetaInsumo;
	}

	public void setRecetaInsumo(recetaInsumoDTO recetaInsumo) {
		this.recetaInsumo = recetaInsumo;
	}

}
