package com.utn.app.buenGusto.articulo;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.categoria.CategoriaEntity;

@Entity
@Table(name = "articulo")
@Inheritance(strategy = InheritanceType.JOINED)
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public abstract class ArticuloEntity implements Serializable {

	private static final long serialVersionUID = 4801679657904614999L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	protected long id;
	protected double precio_de_venta;
	protected String url_imagen;
	protected boolean es_catalogo;
	protected String denominacion;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "categoria_id")
	protected CategoriaEntity categoria;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public boolean isEs_catalogo() {
		return es_catalogo;
	}

	public void setEs_catalogo(boolean es_catalogo) {
		this.es_catalogo = es_catalogo;
	}

	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}

	public CategoriaEntity getCategoria() {
		return categoria;
	}

	public void setCategoria(CategoriaEntity categoria) {
		this.categoria = categoria;
	}

	public double getPrecio_de_venta() {
		return precio_de_venta;
	}

	public void setPrecio_de_venta(double precio_de_venta) {
		this.precio_de_venta = precio_de_venta;
	}

	public String getUrl_imagen() {
		return url_imagen;
	}

	public void setUrl_imagen(String url_imagen) {
		this.url_imagen = url_imagen;
	}

}
