package com.utn.app.buenGusto.entities;

import java.io.Serializable;
import java.util.Date;
 
import javax.persistence.Entity; 
import javax.persistence.Table;

@Entity
@Table(name = "receta")
public class RecetaEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;

	private String nombreReceta;
	private Date fechaDeAlta;
	
	public String getNombreReceta() {
		return nombreReceta;
	}
	public void setNombreReceta(String nombreReceta) {
		this.nombreReceta = nombreReceta;
	}
	public Date getFechaDeAlta() {
		return fechaDeAlta;
	}
	public void setFechaDeAlta(Date fechaDeAlta) {
		this.fechaDeAlta = fechaDeAlta;
	}
  
	
}
