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
	private String nombre_horario_laboral;

	@NotEmpty
	private int horario_inicio;

	@NotEmpty
	private int horario_fin;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre_horario_laboral() {
		return nombre_horario_laboral;
	}

	public void setNombre_horario_laboral(String nombre_horario_laboral) {
		this.nombre_horario_laboral = nombre_horario_laboral;
	}

	public int getHorario_inicio() {
		return horario_inicio;
	}

	public void setHorario_inicio(int horario_inicio) {
		this.horario_inicio = horario_inicio;
	}

	public int getHorario_fin() {
		return horario_fin;
	}

	public void setHorario_fin(int horario_fin) {
		this.horario_fin = horario_fin;
	}

}
