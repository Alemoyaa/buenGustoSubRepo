package com.utn.app.buenGusto.pedido;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.cliente.ClienteEntity;
import com.utn.app.buenGusto.detallePedido.DetallePedidoEntity;
import com.utn.app.buenGusto.estadoPedido.EstadoPedidoEntity;
import com.utn.app.buenGusto.factura.FacturaEntity;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class PedidoDTO {

	private long id;

	private Date fechaRealizacion;
	private Timestamp hora_estimada_fin;
	private boolean tipo_Envio;
	private int numero;

	private List<DetallePedidoEntity> lista_detallePedido = new ArrayList<DetallePedidoEntity>();

	private FacturaEntity facturaEntity;
	private EstadoPedidoEntity estadoPedido;

	private ClienteEntity clientePedido;

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

	public Timestamp getHora_estimada_fin() {
		return hora_estimada_fin;
	}

	public void setHora_estimada_fin(Timestamp hora_estimada_fin) {
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

	public EstadoPedidoEntity getEstadoPedido() {
		return estadoPedido;
	}

	public void setEstadoPedido(EstadoPedidoEntity estadoPedido) {
		this.estadoPedido = estadoPedido;
	}

	public ClienteEntity getClientePedido() {
		return clientePedido;
	}

	public void setClientePedido(ClienteEntity clientePedido) {
		this.clientePedido = clientePedido;
	}

	public FacturaEntity getFacturaEntity() {
		return facturaEntity;
	}

	public void setFacturaEntity(FacturaEntity facturaEntity) {
		this.facturaEntity = facturaEntity;
	}

	public List<DetallePedidoEntity> getLista_detallePedido() {
		return lista_detallePedido;
	}

	public void setLista_detallePedido(List<DetallePedidoEntity> lista_detallePedido) {
		this.lista_detallePedido = lista_detallePedido;
	}

}
