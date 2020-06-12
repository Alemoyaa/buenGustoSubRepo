package com.utn.app.buenGusto.cabezaPedido;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.cabezaFactura.CabezaFacturaEntity;
import com.utn.app.buenGusto.detallePedido.DetallePedidoEntity;
import com.utn.app.buenGusto.estadoPedido.EstadoPedidoEntity;
import com.utn.app.buenGusto.historicoEstado.HistoricoEstadoEntity;
import com.utn.app.buenGusto.personaCajero.PersonaCajeroEntity;
import com.utn.app.buenGusto.personaCliente.PersonaClienteEntity;
import com.utn.app.buenGusto.personaCocinero.PersonaCocineroEntity;
import com.utn.app.buenGusto.personaRepartidor.PersonaRepartidorEntity;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class CabezaPedidoDTO {
	 
	private long id;
	
	private Date fechaRealizacion;
	private Date hora_estimada_fin;
	private boolean tipo_Envio;
	private int numero;

	private List<HistoricoEstadoEntity> lista_historicoEstado = new ArrayList<HistoricoEstadoEntity>();

	//private List<DetallePedidoEntity> lista_detallePedido = new ArrayList<DetallePedidoEntity>();

	private EstadoPedidoEntity EstadoPedido;

	// Cliente
	private PersonaClienteEntity ClientePedido;
 
	private PersonaRepartidorEntity RepartidorPedido;

	private PersonaCocineroEntity CocineroPedido;

	private PersonaCajeroEntity CajeroPedido;

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

	/*public List<DetallePedidoEntity> getLista_detallePedido() {
		return lista_detallePedido;
	}

	public void setLista_detallePedido(List<DetallePedidoEntity> lista_detallePedido) {
		this.lista_detallePedido = lista_detallePedido;
	}*/

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
