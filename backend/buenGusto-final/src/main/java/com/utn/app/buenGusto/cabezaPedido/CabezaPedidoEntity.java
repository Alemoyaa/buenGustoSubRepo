package com.utn.app.buenGusto.cabezaPedido;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.utn.app.buenGusto.detallePedido.DetallePedidoEntity;
import com.utn.app.buenGusto.estadoPedido.EstadoPedidoEntity;
import com.utn.app.buenGusto.historicoEstado.HistoricoEstadoEntity;

@Entity
@Table(name = "cabeza_pedido")
public class CabezaPedidoEntity implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2109963082457857151L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id; 
	
	private Date fechaRealizacion; 
	
	private Date hora_estimada_fin;
	
	private boolean tipo_Envio;
	
	private int numero;
	
	@OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL)
	private List<HistoricoEstadoEntity> lista_historicoEstado;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "estado_id")
	private EstadoPedidoEntity EstadoPedido;
	
	@OneToMany(mappedBy = "cabezaPedido", cascade = CascadeType.ALL)
	private List<DetallePedidoEntity> lista_detallePedido;

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

	public Date getHora_estimada_fin() {
		return hora_estimada_fin;
	}

	public void setHora_estimada_fin(Date hora_estimada_fin) {
		this.hora_estimada_fin = hora_estimada_fin;
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

	public List<HistoricoEstadoEntity> getLista_historicoEstado() {
		return lista_historicoEstado;
	}

	public void setLista_historicoEstado(List<HistoricoEstadoEntity> lista_historicoEstado) {
		this.lista_historicoEstado = lista_historicoEstado;
	}

	public EstadoPedidoEntity getEstadoPedido() {
		return EstadoPedido;
	}

	public void setEstadoPedido(EstadoPedidoEntity estadoPedido) {
		EstadoPedido = estadoPedido;
	}

	public List<DetallePedidoEntity> getLista_detallePedido() {
		return lista_detallePedido;
	}

	public void setLista_detallePedido(List<DetallePedidoEntity> lista_detallePedido) {
		this.lista_detallePedido = lista_detallePedido;
	}
	
	/*
	  
	  private ClienteEntity cliente;
	  
	  private CocineroEntity cocinero;
	  
	  private CajeroEntity cajero;
	  
	  private RepartidorEntity repartidor;
	  
	 */
	 
}
