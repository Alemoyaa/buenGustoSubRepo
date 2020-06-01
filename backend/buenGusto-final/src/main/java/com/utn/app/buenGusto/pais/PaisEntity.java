package com.utn.app.buenGusto.pais;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity; 
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id; 
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.utn.app.buenGusto.provincia.ProvinciaEntity;
  
@Entity
@Table(name = "pais")
public class PaisEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5134649836119405377L;
 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id") 
	private long id;
	
	private String nombre;
	
	
	@OneToMany(mappedBy = "pais", cascade = CascadeType.ALL)
	private List<ProvinciaEntity> provincias = new ArrayList<ProvinciaEntity>(); 
	

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

	public List<ProvinciaEntity> getProvincias() {
		return provincias;
	}

	public void setProvincias(List<ProvinciaEntity> provincias) {
		this.provincias = provincias;
	} 
	 

}
