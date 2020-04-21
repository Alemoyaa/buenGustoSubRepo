package com.utn.app.buenGusto.entities;

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

@Entity
@Table(name = "configuracion_general")
public class ConfiguracionGeneralEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@NotEmpty
	private int cantidadCocineros;

	@NotEmpty
	private String emailEmpresa;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true) 
    @JoinColumn(name = "horario_fk_configuracion")
	private List<HorarioLaboralEntity> horarios;

	public int getCantidadCocineros() {
		return cantidadCocineros;
	}

	public void setCantidadCocineros(int cantidadCocineros) {
		this.cantidadCocineros = cantidadCocineros;
	}

	public String getEmailEmpresa() {
		return emailEmpresa;
	}

	public void setEmailEmpresa(String emailEmpresa) {
		this.emailEmpresa = emailEmpresa;
	}

	public List<HorarioLaboralEntity> getHorarios() {
		return horarios;
	}

	public void setHorarios(List<HorarioLaboralEntity> horarios) {
		this.horarios = horarios;
	}

}
