package com.utn.app.buenGusto.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "articulo_manufacturado")
public class ArticuloManufacturadoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private int tiempoEstimadoCocina;

	private String _urlImagen;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "receta_id")
	private RecetaEntity receta;

	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL) // trae atributos y sus correspondientes relaciones
	@JoinColumn(name = "articulo_id")
	private ArticuloEntity articulo;

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

}
