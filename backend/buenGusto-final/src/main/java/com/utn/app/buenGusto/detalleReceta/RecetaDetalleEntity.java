package com.utn.app.buenGusto.detalleReceta;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.articuloInsumo.ArticuloInsumoEntity;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.receta.RecetaEntity;
import com.utn.app.buenGusto.recetaInsumo.recetaInsumoDTO;
import com.utn.app.buenGusto.recetaInsumo.recetaInsumoEntity;

@Entity
@Table(name = "receta_detalle")
public class RecetaDetalleEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private double cantidad;
	private String unidadMedida;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "receta_id")
	private RecetaEntity receta; 
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "articulo_insumo_id")
	private ArticuloInsumoEntity articuloInsumo;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "receta_insumo_id")
	private recetaInsumoEntity recetaInsumo;
	
	public RecetaEntity getReceta() {
		return receta;
	}

	public void setReceta(RecetaEntity receta) {
		this.receta = receta;
	}
	
	public ArticuloInsumoEntity getArticuloinsumo() {
		return articuloInsumo;
	}

	public void setArticuloinsumo(ArticuloInsumoEntity articuloinsumo) {
		this.articuloInsumo = articuloinsumo;
	}

	public double getCantidad() {
		return cantidad;
	}

	public void setCantidad(double cantidad) {
		this.cantidad = cantidad;
	}

	public String getUnidadMedida() {
		return unidadMedida;
	}

	public void setUnidadMedida(String unidadMedida) {
		this.unidadMedida = unidadMedida;
	}
	
	public recetaInsumoEntity getRecetaInsumo() {
		return recetaInsumo;
	}

	public void setRecetaInsumo(recetaInsumoEntity recetaInsumo) {
		this.recetaInsumo = recetaInsumo;
	}

}
