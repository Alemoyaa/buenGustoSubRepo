package com.utn.app.buenGusto.articulo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.utn.app.buenGusto.categoria.CategoriaEntity;

@Entity
@Table(name = "articulo")
public abstract class ArticuloEntity implements Serializable{

	private static final long serialVersionUID = 4801679657904614999L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	protected long id;
	
	protected boolean es_catalogo;
	
	protected double precio_de_venta;
	
	protected String denominacion;
	
	protected String url_imagen;
	
	@OneToMany(fetch = FetchType.LAZY)
	@JoinColumn(name = "categoria_articulo")
	protected CategoriaEntity categoria;
	
}
