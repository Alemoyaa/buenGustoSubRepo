package com.utn.app.buenGusto.cabezaPedido;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.utn.app.buenGusto.detallePedido.DetallePedidoEntity;
import com.utn.app.buenGusto.estadoPedido.EstadoPedidoEntity;
import com.utn.app.buenGusto.historicoEstado.HistoricoEstadoEntity;
import com.utn.app.buenGusto.personaCajero.PersonaCajeroEntity;
import com.utn.app.buenGusto.personaCliente.PersonaClienteEntity;
import com.utn.app.buenGusto.personaCocinero.PersonaCocineroEntity;
import com.utn.app.buenGusto.personaRepartidor.PersonaRepartidorEntity;
import com.utn.app.buenGusto.cabezaFactura.CabezaFacturaEntity;

@Entity
@Table(name = "cabeza_pedido")
public class CabezaPedidoEntity implements Serializable {

	private static final long serialVersionUID = 2109963082457857151L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;

	private Date fechaRealizacion;
	private Date hora_estimada_fin;
	private boolean tipo_Envio;
	private int numero;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "historico_estado_id")
	private List<HistoricoEstadoEntity> lista_historicoEstado = new ArrayList<HistoricoEstadoEntity>();

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "cabeza_pedido_id")
	private List<DetallePedidoEntity> lista_detallePedido = new ArrayList<DetallePedidoEntity>();

	@ManyToOne(optional = false, cascade = CascadeType.ALL/*, fetch = FetchType.LAZY*/)
	@JoinColumn(name = "estado_pedido_id")
	private EstadoPedidoEntity EstadoPedido;

	// Cliente
	@ManyToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "cliente_id")
	private PersonaClienteEntity ClientePedido;

	// Empleados
	@ManyToOne(optional = true, cascade = CascadeType.ALL)
	@JoinColumn(name = "repartidor_id")
	private PersonaRepartidorEntity RepartidorPedido;

	@ManyToOne(optional = true, cascade = CascadeType.ALL)
	@JoinColumn(name = "cocinero_id")
	private PersonaCocineroEntity CocineroPedido;

	@ManyToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "cajero_id")
	private PersonaCajeroEntity CajeroPedido;

	// Factura
	@OneToOne(optional = true, cascade = CascadeType.ALL)
	@JoinColumn(name = "cabeza_factura_id")
	private CabezaFacturaEntity CabezaFacturaEntity;

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

	public PersonaClienteEntity getClientePedido() {
		return ClientePedido;
	}

	public void setClientePedido(PersonaClienteEntity clientePedido) {
		ClientePedido = clientePedido;
	}

	public PersonaRepartidorEntity getRepartidorPedido() {
		return RepartidorPedido;
	}

	public void setRepartidorPedido(PersonaRepartidorEntity repartidorPedido) {
		RepartidorPedido = repartidorPedido;
	}

	public PersonaCocineroEntity getCocineroPedido() {
		return CocineroPedido;
	}

	public void setCocineroPedido(PersonaCocineroEntity cocineroPedido) {
		CocineroPedido = cocineroPedido;
	}

	public PersonaCajeroEntity getCajeroPedido() {
		return CajeroPedido;
	}

	public void setCajeroPedido(PersonaCajeroEntity cajeroPedido) {
		CajeroPedido = cajeroPedido;
	}

	public CabezaFacturaEntity getCabezaFacturaEntity() {
		return CabezaFacturaEntity;
	}

	public void setCabezaFacturaEntity(CabezaFacturaEntity cabezaFacturaEntity) {
		CabezaFacturaEntity = cabezaFacturaEntity;
	}

}
