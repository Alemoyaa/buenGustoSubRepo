package com.utn.app.buenGusto.articuloManufacturadoDetalle;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotEmpty;

import com.utn.app.buenGusto.articuloInsumo.articuloInsumoEntity;
import com.utn.app.buenGusto.articuloManufacturado.articuloManufacturadoEntity;
import com.utn.app.buenGusto.commons.commonEntity;



@Entity
@Table(name = "articulo_manufacturado_detalle")
public class articuloManufacturadoDetalleEntity extends commonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	@NotEmpty
	private double cantidad;
	
	@NotEmpty
	private String unidadMedida;
	
	
	// relacion ManyToOne bidireccional  ArticuloManufacturadoDetalle --- ArticuloManufacturado
    @ManyToOne(fetch = FetchType.EAGER) //trae atributos y sus correspondientes relaciones
    @JoinColumn(name= "articuloManufacturadoDetalle_fk_articuloManufacturado")
    private articuloManufacturadoEntity articuloManufacturado;
    
 // relacion ManyToOne bidireccional  ArticuloManufacturadoDetalle --- ArticuloInsumo
    @ManyToOne(fetch = FetchType.EAGER) //trae atributos y sus correspondientes relaciones
    @JoinColumn(name= "articuloManufacturadoDetalle_fk_articuloInsumo")
    private articuloInsumoEntity articuloInsumo;
    
    
    

	public articuloManufacturadoDetalleEntity(@NotEmpty double cantidad, @NotEmpty String unidadMedida,
		articuloManufacturadoEntity articuloManufacturado, articuloInsumoEntity articuloInsumo) {
	
	this.cantidad = cantidad;
	this.unidadMedida = unidadMedida;
	this.articuloManufacturado = articuloManufacturado;
	this.articuloInsumo = articuloInsumo;
}

	public articuloManufacturadoDetalleEntity() {
	super();
}

	public articuloManufacturadoEntity getArticuloManufacturado() {
		return articuloManufacturado;
	}

	public void setArticuloManufacturado(articuloManufacturadoEntity articuloManufacturado) {
		this.articuloManufacturado = articuloManufacturado;
	}

	public articuloInsumoEntity getArticuloInsumo() {
		return articuloInsumo;
	}

	public void setArticuloInsumo(articuloInsumoEntity articuloInsumo) {
		this.articuloInsumo = articuloInsumo;
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
	
}
