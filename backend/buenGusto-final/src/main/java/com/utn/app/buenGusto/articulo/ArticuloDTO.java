package com.utn.app.buenGusto.articulo;

import java.util.ArrayList;
import java.util.List;

import com.utn.app.buenGusto.common.CommonDTO;

public class ArticuloDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String denominacion;
	private double precioventa;

	//private List<RubroGeneralDTO> rubros = new ArrayList<RubroGeneralDTO>();

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

	/*public List<RubroGeneralDTO> getRubros() {
		return rubros;
	}

	public void setRubros(List<RubroGeneralDTO> rubros) {
		this.rubros = rubros;
	}*/

}
