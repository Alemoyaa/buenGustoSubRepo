package com.utn.app.buenGusto.historicoEstado;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.cabezaPedido.CabezaPedidoEntity;
import com.utn.app.buenGusto.estadoPedido.EstadoPedidoEntity;
import com.utn.app.buenGusto.pedido.PedidoEntity;

@Entity
@Table(name = "historico_estado")
public class HistoricoEstadoEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;
	private Date fecha_modificacion;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "pedido_id")
	private CabezaPedidoEntity pedido;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "estado_id")
	private EstadoPedidoEntity estado;

	public Date getFecha_modificacion() {
		return fecha_modificacion;
	}

	public void setFecha_modificacion(Date fecha_modificacion) {
		this.fecha_modificacion = fecha_modificacion;
	}

	public CabezaPedidoEntity getPedido() {
		return pedido;
	}

	public void setPedido(CabezaPedidoEntity pedido) {
		this.pedido = pedido;
	}

	public EstadoPedidoEntity getEstado() {
		return estado;
	}

	public void setEstado(EstadoPedidoEntity estado) {
		this.estado = estado;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

}
