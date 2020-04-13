package com.utn.app.buenGusto.pedido;

import java.util.Date;

import com.utn.app.buenGusto.cliente.clienteDTO; 
import com.utn.app.buenGusto.commons.commonDTO;
import com.utn.app.buenGusto.detallePedido.detallePedidoDTO; 
import com.utn.app.buenGusto.factura.facturaDTO; 

public class pedidoDTO  extends commonDTO {
	
	
	private int fecha; 
	private int numero; 
	private int estado;
	private Date horaEstimadaFin; 
	private int tipoEnvio;
	
	private clienteDTO cliente;
	
	//private facturaDTO factura;
	//private List<detallePedidoDTO> detallePedidos;
	
 
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
	public clienteDTO getCliente() {
		return cliente;
	}
	public void setCliente(clienteDTO cliente) {
		this.cliente = cliente;
	}
	
}
