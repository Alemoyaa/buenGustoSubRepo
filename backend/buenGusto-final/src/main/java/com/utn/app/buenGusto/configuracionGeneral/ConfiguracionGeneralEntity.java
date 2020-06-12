package com.utn.app.buenGusto.configuracionGeneral;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.horarioLaboral.HorarioLaboralEntity;

@Entity
@Table(name = "configuracion_general")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ConfiguracionGeneralEntity implements Serializable {

	private static final long serialVersionUID = -3884289039891364857L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;

	@NotEmpty
	private int cantidadCocineros;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "configuracion_general_id")
	private List<HorarioLaboralEntity> horarios = new ArrayList<HorarioLaboralEntity>();

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getCantidadCocineros() {
		return cantidadCocineros;
	}

	public void setCantidadCocineros(int cantidadCocineros) {
		this.cantidadCocineros = cantidadCocineros;
	}

	public List<HorarioLaboralEntity> getHorarios() {
		return horarios;
	}

	public void setHorarios(List<HorarioLaboralEntity> horarios) {
		this.horarios = horarios;
	}

}
