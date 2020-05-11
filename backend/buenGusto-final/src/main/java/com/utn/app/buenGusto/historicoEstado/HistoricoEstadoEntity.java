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
import com.utn.app.buenGusto.estado.EstadoEntity;
import com.utn.app.buenGusto.pedido.PedidoEntity;

@Entity
@Table(name = "historico_estado")
public class HistoricoEstadoEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private Date fecha_modificacion; 
	
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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
}
