package com.utn.app.buenGusto.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "cliente")
public class ClienteEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private String nombre;
	private String apellido;
	private long telefono;
	private String email;
	private String uidFirebase;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "clienteDomicilio", orphanRemoval = true)
	private List<DomicilioEntity> domicilios;

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

	public List<DomicilioEntity> getDomicilios() {
		return domicilios;
	}

	public void setDomicilios(List<DomicilioEntity> domicilios) {
		this.domicilios = domicilios;
	}

	public String getUidFirebase() {
		return uidFirebase;
	}

	public void setUidFirebase(String uidFirebase) {
		this.uidFirebase = uidFirebase;
	}

}
