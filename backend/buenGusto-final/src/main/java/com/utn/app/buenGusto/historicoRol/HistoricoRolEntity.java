package com.utn.app.buenGusto.historicoRol;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "usuario_rol")
	private UsuarioEntity usuario;

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

	public UsuarioEntity getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioEntity usuario) {
		this.usuario = usuario;
	}

}