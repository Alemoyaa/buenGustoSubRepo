package com.utn.app.buenGusto.estadoPedido;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "estado_pedido")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class EstadoPedidoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	private String nombreEstado;

	public String getNombreEstado() {
		return nombreEstado;
	}

	public void setNombreEstado(String nombreEstado) {
		this.nombreEstado = nombreEstado;
	}

}
