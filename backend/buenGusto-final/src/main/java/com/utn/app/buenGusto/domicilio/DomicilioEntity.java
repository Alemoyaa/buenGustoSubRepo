package com.utn.app.buenGusto.domicilio;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.utn.app.buenGusto.usuario.UsuarioEntity;

@Entity
@Table(name = "domicilio")
public class DomicilioEntity implements Serializable {

	private static final long serialVersionUID = 5685412683798686451L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private String calle;
	private int numero;
	private String ciudad; 

	@JsonIgnoreProperties("domicilio")
	@OneToOne(mappedBy = "domicilio", fetch = FetchType.LAZY)
	private UsuarioEntity usuarioDomicilio; 

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
 
	public UsuarioEntity getUsuarioDomicilio() {
		return usuarioDomicilio;
	}

	public void setUsuarioDomicilio(UsuarioEntity usuarioDomicilio) {
		this.usuarioDomicilio = usuarioDomicilio;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}  

}
