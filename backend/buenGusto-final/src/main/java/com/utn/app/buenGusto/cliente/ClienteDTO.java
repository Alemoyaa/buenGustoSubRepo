package com.utn.app.buenGusto.cliente;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.domicilio.DomicilioDTO;
import com.utn.app.buenGusto.rol.RolDTO;

public class ClienteDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String nombre;
	private String apellido;
	private long telefono;
	private String email;
	private String foto;
	private Date fechaBaja;
	private String uidFirebase;

	/*private RolDTO rol;

	@JsonIgnoreProperties("clienteDomicilio") 
	private DomicilioDTO domicilio; 

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public long getTelefono() {
		return telefono;
	}

	public void setTelefono(long telefono) {
		this.telefono = telefono;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUidFirebase() {
		return uidFirebase;
	}

	public void setUidFirebase(String uidFirebase) {
		this.uidFirebase = uidFirebase;
	} 

	public String getFoto() {
		return rol;

	public void setRol(RolDTO rol) {
		this.rol = rol;
	}

	public DomicilioDTO getDomicilio() {
		return domicilio;
	}
 
	public void setDomicilio(DomicilioDTO domicilio) {
		this.domicilio = domicilio;
	} 

}
