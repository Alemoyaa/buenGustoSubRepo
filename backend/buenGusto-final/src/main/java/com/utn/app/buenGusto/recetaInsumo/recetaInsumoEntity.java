package com.utn.app.buenGusto.recetaInsumo;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.utn.app.buenGusto.articuloInsumo.ArticuloInsumoEntity;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "receta_insumo")
public class recetaInsumoEntity extends CommonEntity implements Serializable{

	private static final long serialVersionUID = 1L;

	private String nombreReceta; 

	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaAlta;
	
	private Date fechaBaja;

	@OneToOne(/*cascade = CascadeType.ALL*/)
	@JoinColumn(name = "articulo_insumo_id")
	private ArticuloInsumoEntity articuloInsumoReceta;

	public String getNombre() {
		return nombreReceta;
	}

	public void setNombre(String nombre) {
		this.nombreReceta = nombre;
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

	public ArticuloInsumoEntity getArticuloInsumoReceta() {
		return articuloInsumoReceta;
	}

	public void setArticuloInsumoReceta(ArticuloInsumoEntity articuloInsumoReceta) {
		this.articuloInsumoReceta = articuloInsumoReceta;
	}
	
}
