package com.utn.app.buenGusto.articuloManufacturado;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.Transient;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.articulo.ArticuloEntity;
import com.utn.app.buenGusto.detalleManufacturado.DetalleManufacturadoEntity;

@Entity
@Table(name = "articulo_manufacturado")
@PrimaryKeyJoinColumn(name = "articulo_manufacturado_Id")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ArticuloManufacturadoEntity extends ArticuloEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private int tiempo_estimado_manuf;
	
	@Transient
	private double costo_de_manuf = 0.0d;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "articuloManufacturado_id")
	private List<DetalleManufacturadoEntity> lista_detalleManufacturado = new ArrayList<DetalleManufacturadoEntity>();

	public int getTiempo_estimado_manuf() {
		return tiempo_estimado_manuf;
	}

	public void setTiempo_estimado_manuf(int tiempo_estimado_manuf) {
		this.tiempo_estimado_manuf = tiempo_estimado_manuf;
	}

	public double getCosto_de_manuf() {
		return costo_de_manuf;
	}

	//Revisar si sigue haciendo falta este metodo
	public void setCosto_de_manuf(double costo_de_manuf) {
		this.costo_de_manuf = costo_de_manuf;
	}

	public double calcularCosto_de_manuf() {
		double result = 0.0d;
		for (DetalleManufacturadoEntity p:this.lista_detalleManufacturado) {
			result = result + p.getSubCosto();
		}
		return result;
	}
	
	public List<DetalleManufacturadoEntity> getLista_detalleManufacturado() {
		return lista_detalleManufacturado;
	}

	public void setLista_detalleManufacturado(List<DetalleManufacturadoEntity> lista_detalleManufacturado) {
		this.lista_detalleManufacturado = lista_detalleManufacturado;
		this.costo_de_manuf = this.calcularCosto_de_manuf();
	}

}