package com.utn.app.buenGusto.pedido;

import java.util.Date;

import com.utn.app.buenGusto.cliente.ClienteDTO;
import com.utn.app.buenGusto.common.CommonDTO; 
import com.utn.app.buenGusto.pedidoEstado.EstadoDTO;

public class PedidoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private Date fecha;
	private int numero;  
	private Date horaEstimadaFin;
	private int tipoEnvio;

	private EstadoDTO estado;
	
	private ClienteDTO cliente;

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
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

	public ClienteDTO getCliente() {
		return cliente;
	}

	public void setCliente(ClienteDTO cliente) {
		this.cliente = cliente;
	} 

	public EstadoDTO getEstado() {
		return estado;
	}

	public void setEstado(EstadoDTO estado) {
		this.estado = estado;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
}
