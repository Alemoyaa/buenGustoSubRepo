package com.utn.app.buenGusto.articuloInsumo;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
 
import com.utn.app.buenGusto.recetaInsumo.RecetaInsumoEntity;
import com.utn.app.buenGusto.stockArticulo.StockArticuloEntity;
import com.utn.app.buenGusto.subCategoriaAI.SubCategoriaAIEntity;

@Entity
@Table(name = "articulo_insumo")
public class ArticuloInsumoEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private String denominacion; 
	private double precioDeVenta; 
	private double costoDeVenta; 
	private boolean requiereRefrigeracion; 
	private Date fechaBaja;
	
	@OneToOne(mappedBy = "articuloInsumoReceta", fetch = FetchType.LAZY)
	private RecetaInsumoEntity recetaInsumo;
	
	@OneToOne(mappedBy = "articuloInsumoStock", fetch = FetchType.LAZY)
	private StockArticuloEntity stockArticulo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "subcategoriaAI_id")
	private SubCategoriaAIEntity subCategoriaAI;

	
	public StockArticuloEntity getStockArticulo() {
		return stockArticulo;
	}

	public void setStockArticulo(StockArticuloEntity stockArticulo) {
		this.stockArticulo = stockArticulo;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}

	public double getPrecioDeVenta() {
		return precioDeVenta;
	}

	public void setPrecioDeVenta(double precioDeVenta) {
		this.precioDeVenta = precioDeVenta;
	}

	public double getCostoDeVenta() {
		return costoDeVenta;
	}

	public void setCostoDeVenta(double costoDeVenta) {
		this.costoDeVenta = costoDeVenta;
	}

	public boolean isRequiereRefrigeracion() {
		return requiereRefrigeracion;
	}

	public void setRequiereRefrigeracion(boolean requiereRefrigeracion) {
		this.requiereRefrigeracion = requiereRefrigeracion;
	}

	public Date getFechaBaja() {
		return fechaBaja;
	}

	public void setFechaBaja(Date fechaBaja) {
		this.fechaBaja = fechaBaja;
	}

	public RecetaInsumoEntity getRecetaInsumo() {
		return recetaInsumo;
	}

	public void setRecetaInsumo(RecetaInsumoEntity recetaInsumo) {
		this.recetaInsumo = recetaInsumo;
	}

	public SubCategoriaAIEntity getSubCategoriaAI() {
		return subCategoriaAI;
	}

	public void setSubCategoriaAI(SubCategoriaAIEntity subCategoriaAI) {
		this.subCategoriaAI = subCategoriaAI;
	}

}
