package com.utn.app.buenGusto.categoria;

import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "categoria")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class CategoriaEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = 8910812748496309673L;

	private String nombreCategoria;
	private boolean esCategoriaCatalogo;

	@ManyToOne(cascade = CascadeType.ALL) //Probar si este cascade es correcto
	private CategoriaEntity padre;

	public String getNombreCategoria() {
		return nombreCategoria;
	}

	public void setNombreCategoria(String nombreCategoria) {
		this.nombreCategoria = nombreCategoria;
	}

	public CategoriaEntity getPadre() {
		return padre;
	}

	public void setPadre(CategoriaEntity padre) {
		this.padre = padre;
	}

	public boolean isEsCategoriaCatalogo() {
		return esCategoriaCatalogo;
	}

	public void setEsCategoriaCatalogo(boolean esCategoriaCatalogo) {
		this.esCategoriaCatalogo = esCategoriaCatalogo;
	}

}
