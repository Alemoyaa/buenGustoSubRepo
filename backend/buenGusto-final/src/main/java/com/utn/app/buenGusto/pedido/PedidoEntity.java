package com.utn.app.buenGusto.pedido;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.utn.app.buenGusto.cliente.ClienteEntity;
import com.utn.app.buenGusto.detallePedido.DetallePedidoEntity;
import com.utn.app.buenGusto.estadoPedido.EstadoPedidoEntity;

@Entity
@Table(name = "pedido")
public class PedidoEntity implements Serializable {

	private static final long serialVersionUID = 2109963082457857151L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;

	private Date fechaRealizacion;
	private Timestamp hora_estimada_fin;
	private boolean tipo_Envio;
	private int numero;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "pedido_id")
	private List<DetallePedidoEntity> lista_detallePedido = new ArrayList<DetallePedidoEntity>();

	@ManyToOne(optional = false)
	@JoinColumn(name = "estado_pedido_id")
	private EstadoPedidoEntity EstadoPedido;

	@ManyToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "cliente_id")
	private ClienteEntity ClientePedido;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Date getFechaRealizacion() {
		return fechaRealizacion;
	}

	public void setFechaRealizacion(Date fechaRealizacion) {
		this.fechaRealizacion = fechaRealizacion;
	}

	public boolean isTipo_Envio() {
		return tipo_Envio;
	}

	public void setTipo_Envio(boolean tipo_Envio) {
		this.tipo_Envio = tipo_Envio;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public List<DetallePedidoEntity> getLista_detallePedido() {
		return lista_detallePedido;
	}

	public void setLista_detallePedido(List<DetallePedidoEntity> lista_detallePedido) {
		this.lista_detallePedido = lista_detallePedido;
	}

	public EstadoPedidoEntity getEstadoPedido() {
		return EstadoPedido;
	}

	public void setEstadoPedido(EstadoPedidoEntity estadoPedido) {
		EstadoPedido = estadoPedido;
	}

	public ClienteEntity getClientePedido() {
		return ClientePedido;
	}

	public void setClientePedido(ClienteEntity clientePedido) {
		ClientePedido = clientePedido;
	}

	public Timestamp getHora_estimada_fin() {
		return hora_estimada_fin;
	}

	public void setHora_estimada_fin(Timestamp hora_estimada_fin) {
		this.hora_estimada_fin = hora_estimada_fin;
	}

}
