package com.utn.app.buenGusto.detalleReceta;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.articuloInsumo.ArticuloInsumoEntity;
import com.utn.app.buenGusto.receta.RecetaEntity;
import com.utn.app.buenGusto.recetaInsumo.RecetaInsumoEntity;

@Entity
@Table(name = "receta_detalle")
public class RecetaDetalleEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private double cantidad;
	private String unidadMedida;
	private boolean tipoDetalleReceta; //False es para una RecetaInsumo, True para una Receta

	@ManyToOne(/*cascade = CascadeType.ALL*/)
	@JoinColumn(name = "articulo_insumo_id")
	private ArticuloInsumoEntity articuloInsumo;
	
	
	@ManyToOne(/*cascade = CascadeType.*/)
	@JoinColumn(name = "receta_id", nullable=true)
	private RecetaEntity receta; 
	
	@ManyToOne(/*cascade = CascadeType.ALL*/)
	@JoinColumn(name = "receta_insumo_id", nullable=true)
	private RecetaInsumoEntity recetaInsumo;
	
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
	
	public RecetaInsumoEntity getRecetaInsumo() {
		return recetaInsumo;
	}

	public void setRecetaInsumo(RecetaInsumoEntity recetaInsumo) {
		this.recetaInsumo = recetaInsumo;
	}

	public boolean isTipoDetalleReceta() {
		return tipoDetalleReceta;
	}

	public void setTipoDetalleReceta(boolean tipoDetalleReceta) {
		this.tipoDetalleReceta = tipoDetalleReceta;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public ArticuloInsumoEntity getArticuloInsumo() {
		return articuloInsumo;
	}

	public void setArticuloInsumo(ArticuloInsumoEntity articuloInsumo) {
		this.articuloInsumo = articuloInsumo;
	}

}
