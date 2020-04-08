package com.utn.app.buenGusto.configuracionGeneral;

import java.io.Serializable; 

import javax.persistence.Entity; 
import javax.persistence.Table; 
import javax.validation.constraints.NotEmpty;

import com.utn.app.buenGusto.commons.commonEntity;

@Entity
@Table(name = "configuracion_general")
public class configuracionGeneralEntity extends commonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	@NotEmpty
	private int cantidadCocineros;

	@NotEmpty
	private String emailEmpresa;

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
