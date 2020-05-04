package com.utn.app.buenGusto.historicoEstado;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.pedido.PedidoEntity;
import com.utn.app.buenGusto.pedidoEstado.EstadoEntity;

public class historicoEstadoEntity extends CommonEntity implements Serializable{

	private static final long serialVersionUID = 5340386561748707775L;
	
	private Date fecha_modificacion;
	
	private Date hora_modificacion;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "pedido_id")
	private PedidoEntity pedido;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "estado_id")
	private EstadoEntity estado;

	public Date getFecha_modificacion() {
		return fecha_modificacion;
	}

	public void setFecha_modificacion(Date fecha_modificacion) {
		this.fecha_modificacion = fecha_modificacion;
	}

	public Date getHora_modificacion() {
		return hora_modificacion;
	}

	public void setHora_modificacion(Date hora_modificacion) {
		this.hora_modificacion = hora_modificacion;
	}

	public PedidoEntity getPedido() {
		return pedido;
	}

	public void setPedido(PedidoEntity pedido) {
		this.pedido = pedido;
	}

	public EstadoEntity getEstado() {
		return estado;
	}

	public void setEstado(EstadoEntity estado) {
		this.estado = estado;
	}
	
}
