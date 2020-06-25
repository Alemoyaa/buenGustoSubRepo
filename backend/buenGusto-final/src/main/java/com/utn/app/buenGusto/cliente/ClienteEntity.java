package com.utn.app.buenGusto.cliente;

import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.domicilio.DomicilioEntity;
import com.utn.app.buenGusto.usuario.UsuarioEntity;

@Entity
@Table(name = "cliente")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ClienteEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -1034118546506335502L;

	private String nombre;
	private String apellido;
	private long telefono;

	@OneToOne(cascade = CascadeType.REMOVE, optional = true)
	@JoinColumn(name = "usuario_id")
	private UsuarioEntity usuario;

	@OneToOne(cascade = CascadeType.ALL, optional = true)
	@JoinColumn(name = "domicilio_id", nullable = true)
	private DomicilioEntity domicilio;

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

	public UsuarioEntity getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioEntity usuario) {
		this.usuario = usuario;
	}

	public DomicilioEntity getDomicilio() {
		return domicilio;
	}

	public void setDomicilio(DomicilioEntity domicilio) {
		this.domicilio = domicilio;
	}

}
