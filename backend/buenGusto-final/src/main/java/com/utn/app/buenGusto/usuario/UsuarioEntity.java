package com.utn.app.buenGusto.usuario;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.historicoRol.HistoricoRolEntity;
import com.utn.app.buenGusto.rol.RolEntity;

@Entity
@Table(name = "usuario")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class UsuarioEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private String email;
	private String uid_firebase;
	
	@OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
	private List<HistoricoRolEntity> historicoRol = new ArrayList<HistoricoRolEntity>();
	
	@Transient
	private RolEntity rolActual;
	
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

	public List<HistoricoRolEntity> getHistoricoRol() {
		return historicoRol;
	}

	public void setHistoricoRol(List<HistoricoRolEntity> historicoRol) {
		this.historicoRol = historicoRol;
	}

	public RolEntity getRolActual() {
		int cant = this.historicoRol.size()-1;
		return this.historicoRol.get(cant).getRol();
	}

	public void setRolActual(RolEntity rolActual) {
		this.rolActual = rolActual;
	}

	
}
