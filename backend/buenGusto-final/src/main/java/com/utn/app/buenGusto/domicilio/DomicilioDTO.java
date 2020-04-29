package com.utn.app.buenGusto.domicilio;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.utn.app.buenGusto.cliente.ClienteDTO;
import com.utn.app.buenGusto.common.CommonDTO;

public class DomicilioDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String calle;
	private int numero;
	private String ciudad;
	private String provincia;
 
	@JsonIgnoreProperties("domicilio")
	private ClienteDTO clienteDomicilio; 

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

	public ClienteDTO getClienteDomicilio() {
		return clienteDomicilio;
	}

	public void setClienteDomicilio(ClienteDTO clienteDomicilio) {
		this.clienteDomicilio = clienteDomicilio;
	}

	public String getCiudad() {
		return ciudad;
	}
 
	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public String getProvincia() {
		return provincia;
	}  

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}
 
}
