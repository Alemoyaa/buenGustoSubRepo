package com.utn.app.buenGusto.domicilio;

import java.io.Serializable;
 
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.utn.app.buenGusto.cliente.clienteEntity;
import com.utn.app.buenGusto.commons.commonEntity;

@Entity
@Table(name = "domicilio")
public class domicilioEntity extends commonEntity implements Serializable{
 
	private static final long serialVersionUID = 5685412683798686451L;
	
	@NotEmpty
	private String calle;
	@NotEmpty
	private int numero;
	@NotEmpty
	private String localidad; 
	
	@OneToOne(mappedBy = "domicilio")
	private clienteEntity cliente;
	
	public domicilioEntity() {
		
	}
	public domicilioEntity(@NotEmpty String calle, @NotEmpty int numero, @NotEmpty String localidad ) {
		
		this.calle = calle;
		this.numero = numero;
		this.localidad = localidad; 
	}
	public String getCalle() {
		return calle;
	}
	public void setCalle(String calle) {
		this.calle = calle;
	}
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	public String getLocalidad() {
		return localidad;
	}
	public void setLocalidad(String localidad) {
		this.localidad = localidad;
	} 
	
}
