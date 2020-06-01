package com.utn.app.buenGusto.usuario;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.historicoRol.HistoricoRolEntity;
import com.utn.app.buenGusto.rol.RolEntity;

@Entity
@Table(name = "usuario")
public class UsuarioEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private String email;
	private String uid_firebase;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "rol_id")
	private RolEntity rol;

	/*@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true) 
	@JoinColumn(name = "lista_historicoRol")
	private List<HistoricoRolEntity> lista_historicoRol = new ArrayList<HistoricoRolEntity>();
*/
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public RolEntity getRol() {
		return rol;
	}

	public void setRol(RolEntity rol) {
		this.rol = rol;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUid_firebase() {
		return uid_firebase;
	}

	public void setUid_firebase(String uid_firebase) {
		this.uid_firebase = uid_firebase;
	}

	/*public List<HistoricoRolEntity> getLista_historicoRol() {
		return lista_historicoRol;
	}

	public void setLista_historicoRol(List<HistoricoRolEntity> lista_historicoRol) {
		this.lista_historicoRol = lista_historicoRol;
	}*/

}
