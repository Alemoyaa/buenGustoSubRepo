package com.utn.app.buenGusto.cliente;

import java.util.ArrayList;
import java.util.List;

import com.utn.app.buenGusto.commons.commonDTO;
import com.utn.app.buenGusto.domicilio.domicilioDTO; 
import com.utn.app.buenGusto.pedido.pedidoDTO;

public class clienteDTO extends commonDTO  {
	
	private String nombre;  
	private String apellido;  
	private long telefono;  
	private String email;
	
	private domicilioDTO domicilio;
	
	private List<pedidoDTO> pedidos = new ArrayList<>();
	   
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
	public domicilioDTO getDomicilio() {
		return domicilio;
	}
	public void setDomicilio(domicilioDTO domicilio) {
		this.domicilio = domicilio;
	}
	public List<pedidoDTO> getPedidos() {
		return pedidos;
	}
	public void setPedidos(List<pedidoDTO> pedidos) {
		this.pedidos = pedidos;
	} 
}
