package com.utn.app.buenGusto.articulo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.utn.app.buenGusto.common.CommonEntity; 

@Entity
@Table(name = "articulo")
public class ArticuloEntity extends CommonEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String denominacion;
	private double precioventa;

	/*@ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	@JoinTable(name = "articulo_rubro", joinColumns = @JoinColumn(name = "articulo_id"), inverseJoinColumns = @JoinColumn(name = "rubro_id"))
	private List<RubroGeneralEntity> rubros = new ArrayList<RubroGeneralEntity>();
*/
	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}

	public double getPrecioventa() {
		return precioventa;
	}

	public void setPrecioventa(double precioventa) {
		this.precioventa = precioventa;
	}
/*
	public List<RubroGeneralEntity> getRubros() {
		return rubros;
	}

	public void setRubros(List<RubroGeneralEntity> rubros) {
		this.rubros = rubros;
	}*/

}
