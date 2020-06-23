package com.utn.app.buenGusto.articulo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.categoria.CategoriaEntity;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.historicoPrecioVenta.HistoricoPrecioVentaEntity;

@Entity
@Table(name = "articulo")
@Inheritance(strategy = InheritanceType.JOINED)
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public abstract class ArticuloEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = 4801679657904614999L;
	
	protected String url_imagen;
	protected boolean es_catalogo;
	protected String denominacion;
	
	@Transient
	protected double precio_de_venta_actual;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "categoria_id")
	protected CategoriaEntity categoria;

	@OneToMany(mappedBy = "articulo", cascade = CascadeType.ALL)
	private List<HistoricoPrecioVentaEntity> historicoPrecioVenta;

	public ArticuloEntity() {
		super();
		this.historicoPrecioVenta = new ArrayList<HistoricoPrecioVentaEntity>();
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

	public String getUrl_imagen() {
		return url_imagen;
	}

	public void setUrl_imagen(String url_imagen) {
		this.url_imagen = url_imagen;
	}

	public double getPrecio_de_venta_actual() throws Exception {
		if(this.historicoPrecioVenta == null) {
			throw new Exception ("No tiene ningun historial de precio de venta asociado");
		}else {
			return this.historicoPrecioVenta.get(0).getPrecio_de_venta();
		}
	}

	public void setPrecio_de_venta_actual(double precio_de_venta_actual) {
		this.precio_de_venta_actual = precio_de_venta_actual;
	}

	public List<HistoricoPrecioVentaEntity> getHistoricoPrecioVenta() {
		return historicoPrecioVenta;
	}

	public void setHistoricoPrecioVenta(List<HistoricoPrecioVentaEntity> historicoPrecioVenta) {
		this.historicoPrecioVenta = historicoPrecioVenta;
	}

	//Revisar
	public void agregarPrecioVentaNuevo(double precio_de_venta) {
		HistoricoPrecioVentaEntity hp = new HistoricoPrecioVentaEntity();
		long aux = this.historicoPrecioVenta.get(0).getId();
		hp.setId(aux + 1l);
		hp.setArticulo(this);
		hp.setFecha_modificacion(new Date());
		hp.setPrecio_de_venta(precio_de_venta);
		this.historicoPrecioVenta.add(hp);
	}
	
	//TODO
	public double verPrecioVentaporFecha(Date fecha) {
		return 0d;
	}
}
