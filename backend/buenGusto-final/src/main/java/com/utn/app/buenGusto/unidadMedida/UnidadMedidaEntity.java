package com.utn.app.buenGusto.unidadMedida;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "unidad_medida")
public class UnidadMedidaEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = 2788154458972869742L;

	private String abreviatura;
	private String denominacion;
	private boolean paraRecetas;
	private double equivalencia_KgOL;

	public String getAbreviatura() {
		return abreviatura;
	}

	public void setAbreviatura(String abreviatura) {
		this.abreviatura = abreviatura;
	}

	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}

	public boolean isParaRecetas() {
		return paraRecetas;
	}

	public void setParaRecetas(boolean paraRecetas) {
		this.paraRecetas = paraRecetas;
	}

	public double getEquivalencia_KgOL() {
		return equivalencia_KgOL;
	}

	public void setEquivalencia_KgOL(double equivalencia_KgOL) {
		this.equivalencia_KgOL = equivalencia_KgOL;
	}
}
