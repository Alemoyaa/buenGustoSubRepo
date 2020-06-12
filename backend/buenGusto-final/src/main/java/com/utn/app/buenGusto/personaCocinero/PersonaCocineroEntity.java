package com.utn.app.buenGusto.personaCocinero;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.persona.PersonaEntity;

@Entity
@Table(name = "persona_cocinero")
@PrimaryKeyJoinColumn(name = "persona_cocinero_Id")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class PersonaCocineroEntity extends PersonaEntity {

	private static final long serialVersionUID = 6521545865566567666L;

	private int cuit;
	private double salarioMensual;

	public int getCuit() {
		return cuit;
	}

	public void setCuit(int cuit) {
		this.cuit = cuit;
	}

	public double getSalarioMensual() {
		return salarioMensual;
	}

	public void setSalarioMensual(double salarioMensual) {
		this.salarioMensual = salarioMensual;
	}

}
