package com.utn.app.buenGusto.horarioLaboral;

import com.utn.app.buenGusto.common.CommonDTO;

public class HorarioLaboralDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String nombreHorarioLaboral;
	private int horarioInicio;
	private int horarioFin;

	public String getNombreHorarioLaboral() {
		return nombreHorarioLaboral;
	}

	public void setNombreHorarioLaboral(String nombreHorarioLaboral) {
		this.nombreHorarioLaboral = nombreHorarioLaboral;
	}

	public int getHorarioInicio() {
		return horarioInicio;
	}

	public void setHorarioInicio(int horarioInicio) {
		this.horarioInicio = horarioInicio;
	}

	public int getHorarioFin() {
		return horarioFin;
	}

	public void setHorarioFin(int horarioFin) {
		this.horarioFin = horarioFin;
	}
}
