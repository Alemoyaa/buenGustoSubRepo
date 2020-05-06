package com.utn.app.buenGusto.pedido;

import java.util.Date;

import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.estado.EstadoDTO;
import com.utn.app.buenGusto.usuario.UsuarioDTO;

public class PedidoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private Date fecha;
	private int numero;  
	private Date horaEstimadaFin;
	private boolean tipoEnvio;

	private EstadoDTO estado;
	
	private UsuarioDTO cliente;

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

	public boolean getTipoEnvio() {
		return tipoEnvio;
	}

	public void setTipoEnvio(boolean tipoEnvio) {
		this.tipoEnvio = tipoEnvio;
	}

	public UsuarioDTO getCliente() {
		return cliente;
	}

	public void setCliente(UsuarioDTO cliente) {
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
