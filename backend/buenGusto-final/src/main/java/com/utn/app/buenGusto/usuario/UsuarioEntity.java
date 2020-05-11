package com.utn.app.buenGusto.usuario;

import java.io.Serializable;
import java.sql.Date;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.utn.app.buenGusto.domicilio.DomicilioEntity;
import com.utn.app.buenGusto.rol.RolEntity;

@Entity
@Table(name = "usuario")
public class UsuarioEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private String nombre;
	private String apellido;
	private long telefono;
	private String email;
	private String foto;
	private Date fechaBaja;
	private String uidFirebase;

	@ManyToOne()
	@JoinColumn(name = "rol_usuario")
	private RolEntity rol;
 
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "domicilio_usuario")
	@JsonIgnoreProperties("usuarioDomicilio") 
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
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public Date getFechaBaja() {
		return fechaBaja;
	}

	public void setFechaBaja(Date fechaBaja) {
		this.fechaBaja = fechaBaja;
	}
 
	public RolEntity getRol() { 
		return rol;
	}

	public void setRol(RolEntity rol) {
		this.rol = rol;
	}

	public DomicilioEntity getDomicilio() {
		return domicilio;
	}
 
	public void setDomicilio(DomicilioEntity domicilio) {
		this.domicilio = domicilio;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	} 

}
