package com.utn.app.buenGusto.configuracionGeneral;

import java.io.Serializable;
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

import com.utn.app.buenGusto.horarioLaboral.HorarioLaboralEntity;

@Entity
@Table(name = "configuracion_general")
public class ConfiguracionGeneralEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	@NotEmpty
	private int cantidadCocineros; 

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "horario_fk_configuracion")
	private List<HorarioLaboralEntity> horarios;

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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
