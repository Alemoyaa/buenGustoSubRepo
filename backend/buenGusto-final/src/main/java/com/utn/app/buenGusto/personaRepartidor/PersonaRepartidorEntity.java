package com.utn.app.buenGusto.personaRepartidor;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.persona.PersonaEntity;

@Entity
@Table(name = "persona_repartidor")
@PrimaryKeyJoinColumn(name = "persona_repartidor_Id")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class PersonaRepartidorEntity extends PersonaEntity {

	private static final long serialVersionUID = 6942200577808159135L;

	private String patenteVehiculo;
	private String tipoVehiculo;
	private String categoriaCarnet;
	private Date fecha_emision_carnet;
	private Date fecha_vencimiento_carnet;

	public String getPatenteVehiculo() {
		return patenteVehiculo;
	}

	public void setPatenteVehiculo(String patenteVehiculo) {
		this.patenteVehiculo = patenteVehiculo;
	}

	public String getTipoVehiculo() {
		return tipoVehiculo;
	}

	public void setTipoVehiculo(String tipoVehiculo) {
		this.tipoVehiculo = tipoVehiculo;
	}

	public String getCategoriaCarnet() {
		return categoriaCarnet;
	}

	public void setCategoriaCarnet(String categoriaCarnet) {
		this.categoriaCarnet = categoriaCarnet;
	}

	public Date getFecha_emision_carnet() {
		return fecha_emision_carnet;
	}

	public void setFecha_emision_carnet(Date fecha_emision_carnet) {
		this.fecha_emision_carnet = fecha_emision_carnet;
	}

	public Date getFecha_vencimiento_carnet() {
		return fecha_vencimiento_carnet;
	}

	public void setFecha_vencimiento_carnet(Date fecha_vencimiento_carnet) {
		this.fecha_vencimiento_carnet = fecha_vencimiento_carnet;
	}

}
