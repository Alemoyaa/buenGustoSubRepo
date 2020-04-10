package com.utn.app.buenGusto.cliente;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType; 
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table; 
import javax.validation.constraints.NotEmpty;

import com.utn.app.buenGusto.commons.commonEntity;
import com.utn.app.buenGusto.domicilio.domicilioEntity;
import com.utn.app.buenGusto.pedido.pedidoEntity;

@Entity
@Table(name = "cliente")
public class clienteEntity extends commonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	@NotEmpty
	private String nombre;
	
	@NotEmpty
	private String apellido;
	
	@NotEmpty
	private long telefono;
	
	@NotEmpty
	private String email;
	
	//Dependencia con domicilio
	@OneToOne(cascade= CascadeType.ALL, fetch = FetchType.EAGER) 
	private domicilioEntity domicilio;

	//-----Pedido------
	@OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<pedidoEntity> pedidos;
	
	public clienteEntity() {
		this.pedidos = new ArrayList<>();
	}
	
	
	
	public clienteEntity(@NotEmpty String nombre, @NotEmpty String apellido, @NotEmpty long telefono,
			@NotEmpty String email, domicilioEntity domicilio, List<pedidoEntity> pedidos) {
		super();
		this.nombre = nombre;
		this.apellido = apellido;
		this.telefono = telefono;
		this.email = email;
		this.domicilio = domicilio;
		this.pedidos = pedidos;
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

	public List<pedidoEntity> getPedidos() {
		return pedidos;
	}

	public void setPedidos(List<pedidoEntity> pedido) {
		this.pedidos = pedido;
	} 
}
