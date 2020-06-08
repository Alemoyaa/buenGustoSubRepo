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
import com.utn.app.buenGusto.estadoPedido.EstadoPedidoEntity;

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
	@JoinColumn(name = "estado_pedido_id")
	private EstadoPedidoEntity estadoPedido;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Date getFecha_modificacion() {
		return fecha_modificacion;
	}

	public void setFecha_modificacion(Date fecha_modificacion) {
		this.fecha_modificacion = fecha_modificacion;
	}

	public EstadoPedidoEntity getEstadoPedido() {
		return estadoPedido;
	}

	public void setEstadoPedido(EstadoPedidoEntity estadoPedido) {
		this.estadoPedido = estadoPedido;
	}

}
