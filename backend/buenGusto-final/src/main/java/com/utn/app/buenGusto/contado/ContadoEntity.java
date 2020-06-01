package com.utn.app.buenGusto.contado;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contado")
public class ContadoEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1938529445563926887L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;

}
