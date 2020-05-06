package com.utn.app.buenGusto.domicilio;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.usuario.UsuarioDTO;

public class DomicilioDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String calle;
	private int numero;
	private String ciudad; 
 
	@JsonIgnoreProperties("domicilio")
	private UsuarioDTO usuarioDomicilio; 

	public String getCalle() {
		return calle;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	} 

	public UsuarioDTO getUsuarioDomicilio() {
		return usuarioDomicilio;
	}

	public void setUsuarioDomicilio(UsuarioDTO usuarioDomicilio) {
		this.usuarioDomicilio = usuarioDomicilio;
	}

	public String getCiudad() {
		return ciudad;
	}
 
	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	} 
 
}
