package com.utn.app.buenGusto.horarioLaboral;

import java.io.Serializable;
import java.sql.Time;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "horario_laboral")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class HorarioLaboralEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -3884289039891364857L;

	@NotEmpty
	private Time horario_inicio;

	@NotEmpty
	private Time horario_fin;
	
	@NotEmpty
	private String nombre_dia;

	public Time getHorario_inicio() {
		return horario_inicio;
	}

	public void setHorario_inicio(Time horario_inicio) {
		this.horario_inicio = horario_inicio;
	}

	public Time getHorario_fin() {
		return horario_fin;
	}

	public void setHorario_fin(Time horario_fin) {
		this.horario_fin = horario_fin;
	}

	public String getNombre_dia() {
		return nombre_dia;
	}

	public void setNombre_dia(String nombre_dia) {
		this.nombre_dia = nombre_dia;
	}

}
