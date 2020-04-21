package com.utn.app.buenGusto.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "rubro_general")
public class RubroGeneralEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -2061211142699575304L;
	
	@ManyToMany(mappedBy = "rubros")
    private List<ArticuloEntity> articulos = new ArrayList<ArticuloEntity>();
	
	private String denominacion;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "rubroPadre_id") 
	private RubroGeneralEntity rubroPadre;
	
	
	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}
	public String getDenominacion() {
		return denominacion;
	}
	public List<ArticuloEntity> getArticulos() {
		return articulos;
	}
	public void setArticulos(List<ArticuloEntity> articulos) {
		this.articulos = articulos;
	}
	public RubroGeneralEntity getRubroPadre() {
		return rubroPadre;
	}
	public void setRubroPadre(RubroGeneralEntity rubroPadre) {
		this.rubroPadre = rubroPadre;
	}
	
	
}
