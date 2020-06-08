package com.utn.app.buenGusto.personaCajero;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.utn.app.buenGusto.persona.PersonaEntity;

@Entity
@Table(name = "persona_cajero")
@PrimaryKeyJoinColumn(name = "persona_cajero_Id")
public class PersonaCajeroEntity extends PersonaEntity {

	private static final long serialVersionUID = -4290276702074150143L;

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
