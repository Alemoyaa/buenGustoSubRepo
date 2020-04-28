package com.utn.app.buenGusto.configuracionGeneral;

import java.util.List;

import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.horarioLaboral.HorarioLaboralDTO;

public class ConfiguracionGeneralDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private int cantidadCocineros;

	private String emailEmpresa;
	
	private List<HorarioLaboralDTO> horarios;
 
	public List<HorarioLaboralDTO> getHorarios() {
		return horarios;
	}

	public void setHorarios(List<HorarioLaboralDTO> horarios) {
		this.horarios = horarios;
	}

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

}
