package com.utn.app.buenGusto.DTO;

public class ClienteDTO extends CommonDTO  {

	private static final long serialVersionUID = 1L;
	
	private String nombre;  
	private String apellido;  
	private long telefono;  
	private String email; 
	private String uidFirebase;
	
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
	public DomicilioDTO getDomicilio() {
		return domicilio;
	}
	public void setDomicilio(DomicilioDTO domicilio) {
		this.domicilio = domicilio;
	}
	public String getUidFirebase() {
		return uidFirebase;
	}
	public void setUidFirebase(String uidFirebase) {
		this.uidFirebase = uidFirebase;
	} 
	
	 
}
