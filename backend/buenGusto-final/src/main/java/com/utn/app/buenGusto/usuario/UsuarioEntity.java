package com.utn.app.buenGusto.usuario;

import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.rol.RolEntity;

@Entity
@Table(name = "usuario")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class UsuarioEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private String email;
	private String uid_firebase;

	@ManyToOne(optional = false)
	@JoinColumn(name = "rol_id")
	private RolEntity rol;

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
