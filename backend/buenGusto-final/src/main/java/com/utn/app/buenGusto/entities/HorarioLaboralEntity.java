package com.utn.app.buenGusto.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "horario_laboral")
public class HorarioLaboralEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048862L;

	@NotEmpty
	private String nombreHorarioLaboral;

	@NotEmpty
	private int horarioInicio;

	@NotEmpty
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
