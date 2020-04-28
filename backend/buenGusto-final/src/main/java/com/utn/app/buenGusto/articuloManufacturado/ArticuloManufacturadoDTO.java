package com.utn.app.buenGusto.articuloManufacturado;

import com.utn.app.buenGusto.articulo.ArticuloDTO;
import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.receta.RecetaDTO;

public class ArticuloManufacturadoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private int tiempoEstimadoCocina;

	private String _urlImagen;

	private RecetaDTO receta;

	private ArticuloDTO articulo;

	public int getTiempoEstimadoCocina() {
		return tiempoEstimadoCocina;
	}

	public void setTiempoEstimadoCocina(int tiempoEstimadoCocina) {
		this.tiempoEstimadoCocina = tiempoEstimadoCocina;
	}

	public String get_urlImagen() {
		return _urlImagen;
	}

	public void set_urlImagen(String _urlImagen) {
		this._urlImagen = _urlImagen;
	}

	public RecetaDTO getReceta() {
		return receta;
	}

	public void setReceta(RecetaDTO receta) {
		this.receta = receta;
	}

	public ArticuloDTO getArticulo() {
		return articulo;
	}

	public void setArticulo(ArticuloDTO articulo) {
		this.articulo = articulo;
	}

}
