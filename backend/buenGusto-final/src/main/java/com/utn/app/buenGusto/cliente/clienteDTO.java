package com.utn.app.buenGusto.cliente;

import com.utn.app.buenGusto.commons.commonDTO;
import com.utn.app.buenGusto.domicilio.domicilioEntity;

public class clienteDTO extends commonDTO  {
	
	private String nombre;  
	private String apellido;  
	private long telefono;  
	private String email;
	private domicilioEntity domicilio;
	
	
	
	
	
	
	
	public clienteDTO() {
		super();
	}
	public clienteDTO(String nombre, String apellido, long telefono, String email, domicilioEntity domicilio) {
		super();
		this.nombre = nombre;
		this.apellido = apellido;
		this.telefono = telefono;
		this.email = email;
		this.domicilio = domicilio;
	}
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
	public domicilioEntity getDomicilio() {
		return domicilio;
	}
	public void setDomicilio(domicilioEntity domicilio) {
		this.domicilio = domicilio;
	}
	
	
	
	
}
