package com.utn.app.buenGusto.articuloManufacturado;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
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
 
import com.utn.app.buenGusto.receta.RecetaEntity;
import com.utn.app.buenGusto.subCategoriaAM.SubCategoriaAMEntity; 

@Entity
@Table(name = "articulo_manufacturado")
public class ArticuloManufacturadoEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private int tiempoEstimadoCocina; 
	private String _urlImagen; 
	private String denominacion; 
	private double precioVenta; 
	private double costoVenta; 
	private Date fechaBaja;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "receta_id")
	private RecetaEntity recetaAM;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "subcategoriaAM_id")
	private SubCategoriaAMEntity subCategoriaAM;

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

	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}

	public double getPrecioVenta() {
		return precioVenta;
	}

	public void setPrecioVenta(double precioVenta) {
		this.precioVenta = precioVenta;
	}

	public double getCostoVenta() {
		return costoVenta;
	}

	public void setCostoVenta(double costoVenta) {
		this.costoVenta = costoVenta;
	}

	public Date getFechaBaja() {
		return fechaBaja;
	}

	public void setFechaBaja(Date fechaBaja) {
		this.fechaBaja = fechaBaja;
	}

	public SubCategoriaAMEntity getSubCategoriaAM() {
		return subCategoriaAM;
	}

	public void setSubCategoriaAM(SubCategoriaAMEntity subCategoriaAM) {
		this.subCategoriaAM = subCategoriaAM;
	}

	public RecetaEntity getRecetaAM() {
		return recetaAM;
	}

	public void setRecetaAM(RecetaEntity recetaAM) {
		this.recetaAM = recetaAM;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
}