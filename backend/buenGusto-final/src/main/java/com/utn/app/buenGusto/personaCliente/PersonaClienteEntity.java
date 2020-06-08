package com.utn.app.buenGusto.personaCliente;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.utn.app.buenGusto.persona.PersonaEntity;

@Entity
@Table(name = "persona_cliente")
@PrimaryKeyJoinColumn(name = "persona_cliente_Id")
public class PersonaClienteEntity extends PersonaEntity {

	private static final long serialVersionUID = 912496469740328108L;

	private Date fechaAlta;

	public Date getFechaAlta() {
		return fechaAlta;
	}

	public void setFechaAlta(Date fechaAlta) {
		this.fechaAlta = fechaAlta;
	}
}
