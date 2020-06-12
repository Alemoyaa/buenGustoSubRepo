package com.utn.app.buenGusto.historicoRol;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.rol.RolEntity;

@Entity
@Table(name = "historico_rol")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class HistoricoRolEntity implements Serializable {

	private static final long serialVersionUID = -9159897364231105108L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;

	private Date fecha_modificacion;

	@ManyToOne(optional=false, cascade = CascadeType.ALL)
	@JoinColumn(name = "rol_id")
	private RolEntity rol;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Date getFecha_modificacion() {
		return fecha_modificacion;
	}

	public void setFecha_modificacion(Date fecha_modificacion) {
		this.fecha_modificacion = fecha_modificacion;
	}

	public RolEntity getRol() {
		return rol;
	}

	public void setRol(RolEntity rol) {
		this.rol = rol;
	}

}
