package com.utn.app.buenGusto.pedido;

import java.util.Date;
import java.util.List;

import com.utn.app.buenGusto.cliente.clienteEntity;
import com.utn.app.buenGusto.commons.commonDTO;
import com.utn.app.buenGusto.detallePedido.detallePedidoEntity;
import com.utn.app.buenGusto.factura.facturaEntity;

public class pedidoDTO  extends commonDTO {
	
	
	private int fecha; 
	private int numero; 
	private int estado;
	private Date horaEstimadaFin; 
	private int tipoEnvio;
	
	private clienteEntity cliente;
	private facturaEntity factura;
	private List<detallePedidoEntity> detallePedidos;
	
	
	
	
	
	public pedidoDTO() {
		super();
	}
	public pedidoDTO(int fecha, int numero, int estado, Date horaEstimadaFin, int tipoEnvio, clienteEntity cliente,
			facturaEntity factura, List<detallePedidoEntity> detallePedidos) {
		super();
		this.fecha = fecha;
		this.numero = numero;
		this.estado = estado;
		this.horaEstimadaFin = horaEstimadaFin;
		this.tipoEnvio = tipoEnvio;
		this.cliente = cliente;
		this.factura = factura;
		this.detallePedidos = detallePedidos;
	}
	public int getFecha() {
		return fecha;
	}
	public void setFecha(int fecha) {
		this.fecha = fecha;
	}
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	public int getEstado() {
		return estado;
	}
	public void setEstado(int estado) {
		this.estado = estado;
	}
	public Date getHoraEstimadaFin() {
		return horaEstimadaFin;
	}
	public void setHoraEstimadaFin(Date horaEstimadaFin) {
		this.horaEstimadaFin = horaEstimadaFin;
	}
	public int getTipoEnvio() {
		return tipoEnvio;
	}
	public void setTipoEnvio(int tipoEnvio) {
		this.tipoEnvio = tipoEnvio;
	}
	public clienteEntity getCliente() {
		return cliente;
	}
	public void setCliente(clienteEntity cliente) {
		this.cliente = cliente;
	}
	public facturaEntity getFactura() {
		return factura;
	}
	public void setFactura(facturaEntity factura) {
		this.factura = factura;
	}
	public List<detallePedidoEntity> getDetallePedidos() {
		return detallePedidos;
	}
	public void setDetallePedidos(List<detallePedidoEntity> detallePedidos) {
		this.detallePedidos = detallePedidos;
	}
	
	
	
}
