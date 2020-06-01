package com.utn.app.buenGusto.provincia;

import java.io.Serializable;
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

import com.utn.app.buenGusto.localidad.LocalidadEntity;
import com.utn.app.buenGusto.pais.PaisEntity;

@Entity
@Table(name = "provincia")
public class ProvinciaEntity implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -8959812908842109039L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id") 
	private long id;
	
	private String nombre; 
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "pais_id")
	private PaisEntity pais; 
	
	@OneToMany(mappedBy = "provincia", cascade = CascadeType.ALL)
	private List<LocalidadEntity> provincias = new ArrayList<LocalidadEntity>(); 
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public PaisEntity getPais() {
		return pais;
	}

	public void setPais(PaisEntity pais) {
		this.pais = pais;
	}

	public List<LocalidadEntity> getProvincias() {
		return provincias;
	}

	public void setProvincias(List<LocalidadEntity> provincias) {
		this.provincias = provincias;
	} 
	
	
}