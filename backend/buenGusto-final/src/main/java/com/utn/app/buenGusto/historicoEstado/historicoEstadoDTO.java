package com.utn.app.buenGusto.historicoEstado;

import java.util.Date;

import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.estado.EstadoDTO;
import com.utn.app.buenGusto.pedido.PedidoDTO;

public class historicoEstadoDTO extends CommonDTO{
 
	private static final long serialVersionUID = 5340386561748707775L;
	
	private Date fecha_modificacion; 
	
	private PedidoDTO pedido;
	
	private EstadoDTO estado;

	public Date getFecha_modificacion() {
		return fecha_modificacion;
	}

	public void setFecha_modificacion(Date fecha_modificacion) {
		this.fecha_modificacion = fecha_modificacion;
	} 

	public PedidoDTO getPedido() {
		return pedido;
	}

	public void setPedido(PedidoDTO pedido) {
		this.pedido = pedido;
	}

	public EstadoDTO getEstado() {
		return estado;
	}

	public void setEstado(EstadoDTO estado) {
		this.estado = estado;
	}
	
}
