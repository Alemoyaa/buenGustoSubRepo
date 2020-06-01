package com.utn.app.buenGusto.historicoRol;

import java.io.Serializable;
import java.sql.Date;
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
import javax.persistence.Table;

import com.utn.app.buenGusto.rol.RolEntity;
import com.utn.app.buenGusto.usuario.UsuarioEntity;

@Entity
@Table(name = "historico_rol")
public class HistoricoRolEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -9159897364231105108L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;

	private Date fecha_modificacion;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "rol_id")
	private RolEntity rol;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "lista_historicoRol")
	private List<UsuarioEntity> lista_historicoRol = new ArrayList<UsuarioEntity>();

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public RolEntity getRol() {
		return rol;
	}

	public void setRol(RolEntity rol) {
		this.rol = rol;
	}

	public Date getFecha_modificacion() {
		return fecha_modificacion;
	}

	public void setFecha_modificacion(Date fecha_modificacion) {
		this.fecha_modificacion = fecha_modificacion;
	}

	public List<UsuarioEntity> getLista_historicoRol() {
		return lista_historicoRol;
	}

	public void setLista_historicoRol(List<UsuarioEntity> lista_historicoRol) {
		this.lista_historicoRol = lista_historicoRol;
	}

}
