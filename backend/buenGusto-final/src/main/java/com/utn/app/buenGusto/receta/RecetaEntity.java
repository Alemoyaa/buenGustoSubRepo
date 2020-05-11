package com.utn.app.buenGusto.receta;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.utn.app.buenGusto.articuloManufacturado.ArticuloManufacturadoEntity;

@Entity
@Table(name = "receta")
public class RecetaEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private String nombre_receta;  
	private Date fechaAlta; 
	private Date fechaBaja;

	@JsonIgnoreProperties("recetaAM")
	@OneToOne(mappedBy = "recetaAM", fetch = FetchType.LAZY)
	private ArticuloManufacturadoEntity articuloManufacturado;

	public String getNombre_receta() {
		return nombre_receta;
	}

	public void setNombre_receta(String nombre_receta) {
		this.nombre_receta = nombre_receta;
	}

	public Date getFechaAlta() {
		return fechaAlta;
	}

	public void setFechaAlta(Date fechaAlta) {
		this.fechaAlta = fechaAlta;
	}

	public Date getFechaBaja() {
		return fechaBaja;
	}

	public void setFechaBaja(Date fechaBaja) {
		this.fechaBaja = fechaBaja;
	}

	public ArticuloManufacturadoEntity getArticuloManufacturado() {
		return articuloManufacturado;
	}

	public void setArticuloManufacturado(ArticuloManufacturadoEntity articuloManufacturado) {
		this.articuloManufacturado = articuloManufacturado;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
