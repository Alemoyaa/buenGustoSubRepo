package com.utn.app.buenGusto.domicilio;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.cliente.ClienteEntity;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "domicilio")
public class DomicilioEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = 5685412683798686451L;

	private String calle;
	private int numero;
	private String ciudad;
	private String provincia;

	@OneToOne(mappedBy = "domicilio", fetch = FetchType.LAZY)
	private ClienteEntity cliente; 

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
 
	public ClienteEntity getCliente() {
		return cliente;
	}

	public void setCliente(ClienteEntity cliente) {
		this.cliente = cliente;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	} 
	
	public String getProvincia() {
		return provincia;
	}

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	} 

}
