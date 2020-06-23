package com.utn.app.buenGusto.datosEmpresa;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.domicilio.DomicilioEntity;

@Entity
@Table(name = "datos_empresa")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class DatosEmpresaEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -6278247120228652128L;

	private String email;
	private String propietario;
	private String razonSocial;
	private int telefono;

	@OneToOne(cascade = CascadeType.ALL, optional = false)
	@JoinColumn(name = "domicilio_id", nullable = false)
	private DomicilioEntity domicilio = new DomicilioEntity();

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPropietario() {
		return propietario;
	}

	public void setPropietario(String propietario) {
		this.propietario = propietario;
	}

	public String getRazonSocial() {
		return razonSocial;
	}

	public void setRazonSocial(String razonSocial) {
		this.razonSocial = razonSocial;
	}

	public int getTelefono() {
		return telefono;
	}

	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}

	public DomicilioEntity getDomicilio() {
		return domicilio;
	}

	public void setDomicilio(DomicilioEntity domicilio) {
		this.domicilio = domicilio;
	}

}
