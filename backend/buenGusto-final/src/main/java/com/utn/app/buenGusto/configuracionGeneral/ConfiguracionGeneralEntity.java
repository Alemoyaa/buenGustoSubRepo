package com.utn.app.buenGusto.configuracionGeneral;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.horarioLaboral.HorarioLaboralEntity;

@Entity
@Table(name = "configuracion_general")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ConfiguracionGeneralEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -3884289039891364857L;

	@NotEmpty
	private int cantidadCocineros;

	@NotEmpty
	private String email;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "configuracion_general_id")
	private List<HorarioLaboralEntity> horarios;
	
	public ConfiguracionGeneralEntity() {
		super();
		this.horarios = new ArrayList<HorarioLaboralEntity>();
	}

	public int getCantidadCocineros() {
		return cantidadCocineros;
	}

	public void setCantidadCocineros(int cantidadCocineros) {
		this.cantidadCocineros = cantidadCocineros;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<HorarioLaboralEntity> getHorarios() {
		return horarios;
	}

	public void setHorarios(List<HorarioLaboralEntity> horarios) {
		this.horarios = horarios;
	}
	
}
