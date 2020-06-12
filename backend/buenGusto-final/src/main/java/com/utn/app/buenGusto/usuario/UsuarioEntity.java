package com.utn.app.buenGusto.usuario;

import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.rol.RolEntity;

@Entity
@Table(name = "usuario")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class UsuarioEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;
	
	private String email;
	private String uid_firebase;

	@ManyToOne(cascade = CascadeType.ALL, optional=false)
	@JoinColumn(name = "rol_id")
	private RolEntity rol;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUid_firebase() {
		return uid_firebase;
	}

	public void setUid_firebase(String uid_firebase) {
		this.uid_firebase = uid_firebase;
	}

	public RolEntity getRol() {
		return rol;
	}

	public void setRol(RolEntity rol) {
		this.rol = rol;
	}

}
