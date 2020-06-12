package com.utn.app.buenGusto.contado;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.formaPago.FormaPagoEntity; 

@Entity
@Table(name = "contado")
@javax.persistence.PrimaryKeyJoinColumn(name="forma_pago_contado_id")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ContadoEntity extends FormaPagoEntity implements Serializable {
 
	private static final long serialVersionUID = -1938529445563926887L;

}
