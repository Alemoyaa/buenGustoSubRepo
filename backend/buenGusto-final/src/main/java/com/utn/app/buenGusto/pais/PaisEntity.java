package com.utn.app.buenGusto.pais;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "pais")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class PaisEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = 5134649836119405377L;

	private String nombre;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

}
