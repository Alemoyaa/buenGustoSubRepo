package com.utn.app.buenGusto.horarioLaboral;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "horario_laboral")
public class HorarioLaboralEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048862L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
