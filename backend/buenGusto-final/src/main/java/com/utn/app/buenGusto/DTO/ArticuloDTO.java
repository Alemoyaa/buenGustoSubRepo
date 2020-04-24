package com.utn.app.buenGusto.DTO;

import java.util.ArrayList;
import java.util.List;

import com.utn.app.buenGusto.entities.RubroGeneralEntity;

public class ArticuloDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String denominacion;
	private double precioventa;

	private List<RubroGeneralEntity> rubros;
	
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

}
