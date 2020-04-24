package com.utn.app.buenGusto.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "cliente")
public class ClienteEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private String nombre;
	private String apellido;
	private long telefono;
	private String email;
	private String uidFirebase;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "rol_cliente")
	private RolEntity rol;

	@OneToMany(mappedBy = "clienteDomicilio", cascade = CascadeType.ALL)
	private List<DomicilioEntity> domicilioEntities = new ArrayList<DomicilioEntity>();

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

	public RolEntity getRol() {
		return rol;
	}

	public void setRol(RolEntity rol) {
		this.rol = rol;
	}

	public List<DomicilioEntity> getDomicilioEntities() {
		return domicilioEntities;
	}

	public void setDomicilioEntities(List<DomicilioEntity> domicilioEntities) {
		this.domicilioEntities = domicilioEntities;
	}

}
