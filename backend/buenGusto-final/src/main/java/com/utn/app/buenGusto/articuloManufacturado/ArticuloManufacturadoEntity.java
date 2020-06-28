package com.utn.app.buenGusto.articuloManufacturado;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.detalleManufacturado.DetalleManufacturadoEntity;
import com.utn.app.buenGusto.rubroGeneral.RubroGeneralEntity;

@Entity
@Table(name = "articulo_manufacturado")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ArticuloManufacturadoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private double precio_de_venta;
	private String url_imagen;
	private String denominacion;
	private int tiempo_estimado_manuf;
	
	@Transient
	private double costo_de_manuf;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "articuloManufacturado_id")
	private List<DetalleManufacturadoEntity> lista_detalleManufacturado;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "rubro_general_id")
	protected RubroGeneralEntity rubro;

	public ArticuloManufacturadoEntity() {
		super();
		this.lista_detalleManufacturado = new ArrayList<DetalleManufacturadoEntity>();
	}

	public int getTiempo_estimado_manuf() {
		return tiempo_estimado_manuf;
	}

	public void setTiempo_estimado_manuf(int tiempo_estimado_manuf) {
		this.tiempo_estimado_manuf = tiempo_estimado_manuf;
	}
	
	public double getCosto_de_manuf() {
		return costo_de_manuf;
	}

	public double calcularCostodeManuf(List<DetalleManufacturadoEntity> lista) {
		double result = 0.0d;
		if(!lista.isEmpty()) {
			for (DetalleManufacturadoEntity p:lista) {
				result = result + p.getSubCosto();
			}
			return result;
		}
		else {
			return result;
		}
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

	public double getPrecio_de_venta() {
		return precio_de_venta;
	}

	public void setPrecio_de_venta(double precio_de_venta) {
		this.precio_de_venta = precio_de_venta;
	}

	public String getUrl_imagen() {
		return url_imagen;
	}

	public void setUrl_imagen(String url_imagen) {
		this.url_imagen = url_imagen;
	}

	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}

	public RubroGeneralEntity getRubro() {
		return rubro;
	}

	public void setRubro(RubroGeneralEntity rubro) {
		this.rubro = rubro;
	}

}