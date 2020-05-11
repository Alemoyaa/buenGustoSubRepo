package com.utn.app.buenGusto.recetaInsumo;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.utn.app.buenGusto.articuloInsumo.ArticuloInsumoEntity;

@Entity
@Table(name = "receta_insumo")
public class RecetaInsumoEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private String nombreReceta; 

	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaAlta;
	
	private Date fechaBaja;

	@JsonIgnoreProperties("recetaInsumo")
	@OneToOne
	@JoinColumn(name = "articulo_insumo_id")
	private ArticuloInsumoEntity articuloInsumoReceta;

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

	public ArticuloInsumoEntity getArticuloInsumoReceta() {
		return articuloInsumoReceta;
	}

	public void setArticuloInsumoReceta(ArticuloInsumoEntity articuloInsumoReceta) {
		this.articuloInsumoReceta = articuloInsumoReceta;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombreReceta() {
		return nombreReceta;
	}

	public void setNombreReceta(String nombreReceta) {
		this.nombreReceta = nombreReceta;
	}
	
}
