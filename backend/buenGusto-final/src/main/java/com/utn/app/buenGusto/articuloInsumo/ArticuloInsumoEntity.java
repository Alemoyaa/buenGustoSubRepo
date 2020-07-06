package com.utn.app.buenGusto.articuloInsumo;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.categoria.CategoriaEntity;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.unidadMedida.UnidadMedidaEntity;

@Entity
@Table(name = "articulo_insumo")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ArticuloInsumoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private String denominacion;
	//suponemos que el precio_de_compra es por Kg o por L o por Unidad del Insumo
	private double precio_de_compra;
	private double precio_de_venta;
	private double stock_actual;
	private double stock_minimo;
	private double stock_maximo;
	private boolean requiere_refrigeracion;
	private boolean es_catalogo; 
	private String url_imagen;
	
	@ManyToOne
	@JoinColumn(name = "unidad_medida_id")
	private UnidadMedidaEntity unidadMedidaID;
	
	@ManyToOne
	@JoinColumn(name = "categoria_id")
	private CategoriaEntity categoria;

	public ArticuloInsumoEntity() {
		super();
		this.precio_de_venta = 0.0d;
	}

	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}

	public double getPrecio_de_compra() {
		return precio_de_compra;
	}

	public void setPrecio_de_compra(double precio_de_compra) {
		this.precio_de_compra = precio_de_compra;
	}

	public double getPrecio_de_venta() {
		return precio_de_venta;
	}

	public void setPrecio_de_venta(double precio_de_venta) {
		this.precio_de_venta = precio_de_venta;
	}

	public double getStock_actual() {
		return stock_actual;
	}

	public void setStock_actual(double stock_actual) {
		this.stock_actual = stock_actual;
	}

	public double getStock_minimo() {
		return stock_minimo;
	}

	public void setStock_minimo(double stock_minimo) {
		this.stock_minimo = stock_minimo;
	}

	public double getStock_maximo() {
		return stock_maximo;
	}

	public void setStock_maximo(double stock_maximo) {
		this.stock_maximo = stock_maximo;
	}

	public boolean isRequiere_refrigeracion() {
		return requiere_refrigeracion;
	}

	public void setRequiere_refrigeracion(boolean requiere_refrigeracion) {
		this.requiere_refrigeracion = requiere_refrigeracion;
	}

	public boolean isEs_catalogo() {
		return es_catalogo;
	}

	public void setEs_catalogo(boolean es_catalogo) {
		this.es_catalogo = es_catalogo;
	}

	public String getUrl_imagen() {
		return url_imagen;
	}

	public void setUrl_imagen(String url_imagen) {
		this.url_imagen = url_imagen;
	}

	public UnidadMedidaEntity getUnidadMedidaID() {
		return unidadMedidaID;
	}

	public void setUnidadMedidaID(UnidadMedidaEntity unidadMedidaID) {
		this.unidadMedidaID = unidadMedidaID;
	}

	public CategoriaEntity getCategoria() {
		return categoria;
	}

	public void setCategoria(CategoriaEntity categoria) {
		this.categoria = categoria;
	}
	
	public void descontarStock(double cantidad) {
		this.stock_actual -= cantidad;
	}
	
	public boolean comprobarStock(double cantidad) {
		if(this.stock_actual >= cantidad) {
			return true;
		}else {
			return false;
		}	
	}

	public void aumentarStock(double stock, double precioPorKg) {
		this.stock_actual += stock;
		double precio = (this.precio_de_compra + precioPorKg)/2;
		this.precio_de_compra = precio;
	}
}
