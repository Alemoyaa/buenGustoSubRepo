package com.utn.app.buenGusto.articuloManufacturado;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.utn.app.buenGusto.articulo.ArticuloEntity;
import com.utn.app.buenGusto.detalleManufacturado.DetalleManufacturadoEntity;

@Entity
@Table(name = "articulo_manufacturado")
public class ArticuloManufacturadoEntity extends ArticuloEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private int tiempo_estimado_manuf;
	private double costo_de_manuf;
	 
	@OneToMany(mappedBy = "articuloManufacturadoID"/* , cascade = CascadeType.ALL */)
	private List<DetalleManufacturadoEntity> lista_detalleManufacturado;

	public int getTiempo_estimado_manuf() {
		return tiempo_estimado_manuf;
	}

	public void setTiempo_estimado_manuf(int tiempo_estimado_manuf) {
		this.tiempo_estimado_manuf = tiempo_estimado_manuf;
	}

	public double getCosto_de_manuf() {
		return costo_de_manuf;
	}

	public void setCosto_de_manuf(double costo_de_manuf) {
		this.costo_de_manuf = costo_de_manuf;
	}

	public List<DetalleManufacturadoEntity> getLista_detalleManufacturado() {
		return lista_detalleManufacturado;
	}

	public void setLista_detalleManufacturado(List<DetalleManufacturadoEntity> lista_detalleManufacturado) {
		this.lista_detalleManufacturado = lista_detalleManufacturado;
	}

}