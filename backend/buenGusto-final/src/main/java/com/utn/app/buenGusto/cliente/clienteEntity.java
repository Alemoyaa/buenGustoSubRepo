 package com.utn.app.buenGusto.cliente;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity; 
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
 
import com.utn.app.buenGusto.commons.commonEntity;
import com.utn.app.buenGusto.domicilio.domicilioEntity;
import com.utn.app.buenGusto.pedido.pedidoEntity; 

@Entity
@Table(name = "cliente")
public class clienteEntity extends commonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;
 
	private String nombre;  
	private String apellido;  
	private long telefono;  
	private String email;

	// Dependencia con domicilio
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_domicilio") 
	private domicilioEntity domicilio;

	// -----Pedido------ 
	//@OneToMany(cascade = CascadeType.ALL)
	//private List<pedidoEntity> pedidos = new ArrayList<>();
 
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

	/*public List<pedidoEntity> getPedidos() {
		return pedidos;
	}

	public void setPedidos(List<pedidoEntity> pedidos) {
		this.pedidos = pedidos;
	}*/
}
