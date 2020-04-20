package com.utn.app.buenGusto.articuloManufacturado;

import java.io.Serializable; 

import javax.persistence.CascadeType;
import javax.persistence.Entity; 
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne; 
import javax.persistence.Table; 
 
import com.utn.app.buenGusto.commons.commonEntity; 
import com.utn.app.buenGusto.rubroGeneral.rubroGeneralEntity;

@Entity
@Table(name = "articulo_manufacturado")
public class articuloManufacturadoEntity extends commonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private int tiempoEstimadoCocina;
	private String denominacion;
	private double precioVenta;
	
	private String _urlImagen;

	// relacion ManyToOne bidireccional ArticuloManufacturado ---detallePedido
	@ManyToOne(cascade = CascadeType.ALL) // trae atributos y sus correspondientes relaciones
	@JoinColumn(name = "articuloManufacturado_fk_rubroGeneral")
	private rubroGeneralEntity rubroGeneral;

	public int getTiempoEstimadoCocina() {
		return tiempoEstimadoCocina;
	}

	public void setTiempoEstimadoCocina(int tiempoEstimadoCocina) {
		this.tiempoEstimadoCocina = tiempoEstimadoCocina;
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

	public rubroGeneralEntity getRubroGeneral() {
		return rubroGeneral;
	}

	public void setRubroGeneral(rubroGeneralEntity rubroGeneral) {
		this.rubroGeneral = rubroGeneral;
	}

	public String get_urlImagen() {
		return _urlImagen;
	}

	public void set_urlImagen(String _urlImagen) {
		this._urlImagen = _urlImagen;
	}

}
