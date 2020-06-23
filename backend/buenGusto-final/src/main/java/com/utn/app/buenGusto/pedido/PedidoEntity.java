package com.utn.app.buenGusto.pedido;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.utn.app.buenGusto.cliente.ClienteEntity;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.detallePedido.DetallePedidoEntity;
import com.utn.app.buenGusto.estadoPedido.EstadoPedidoEntity;

@Entity
@Table(name = "pedido")
public class PedidoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = 2109963082457857151L;

	private Date fechaRealizacion;
	private Timestamp hora_estimada_fin;
	private boolean tipo_Envio;
	private int numero;
	
	@Transient
	private double totalPedido;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "pedido_id")
	private List<DetallePedidoEntity> lista_detallePedido = new ArrayList<DetallePedidoEntity>();

	@ManyToOne(optional = false)
	@JoinColumn(name = "estado_pedido_id")
	private EstadoPedidoEntity EstadoPedido;

	@ManyToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "cliente_id")
	private ClienteEntity ClientePedido;

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

	public double getTotalPedido() {
		double result = 0.0d;
		if(this.lista_detallePedido.isEmpty()) {
			return result;
		}else {
			for (DetallePedidoEntity p:this.lista_detallePedido) {
				try {
					result = result + p.getSubtotal();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			return result;
		}
	}

	public void setTotalPedido(double totalPedido) {
		this.totalPedido = totalPedido;
	}
}
