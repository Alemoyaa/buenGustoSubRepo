package com.utn.app.buenGusto.pedido;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import com.utn.app.buenGusto.cliente.ClienteEntity;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.detallePedido.DetallePedidoEntity;
import com.utn.app.buenGusto.domicilio.DomicilioEntity;
import com.utn.app.buenGusto.estadoPedido.EstadoPedidoEntity;

@Entity
@Table(name = "pedido")
public class PedidoEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = 2109963082457857151L;

	private Date fechaRealizacion;
	private Date hora_estimada_fin;
	private boolean tipo_Envio;
	private int numero;
	private int minTotalsinDelivery;
	
	@OneToOne(cascade = CascadeType.ALL, optional = true)
	@JoinColumn(name = "domicilio_id")
	private DomicilioEntity domilicio;

	@Transient
	private double totalPedido;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "pedido_id")
	private List<DetallePedidoEntity> lista_detallePedido;

	@ManyToOne(cascade = CascadeType.MERGE, optional = true)
	@JoinColumn(name = "estado_pedido_id")
	private EstadoPedidoEntity estadoPedido;

	@ManyToOne(cascade = CascadeType.MERGE, optional = true)
	@JoinColumn(name = "cliente_id")
	private ClienteEntity clientePedido;

	public PedidoEntity() {
		super();
		this.lista_detallePedido = new ArrayList<DetallePedidoEntity>();
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

	public double getTotalPedido() {
		double result = 0.0d;
		if (!this.lista_detallePedido.isEmpty()) {
			for (DetallePedidoEntity p : this.lista_detallePedido) {
				result = result + p.getSubtotal();
			}
		}
		return result;
	}

	public void setTotalPedido(double totalPedido) {
		this.totalPedido = totalPedido;
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

	public DomicilioEntity getDomilicio() {
		return domilicio;
	}

	public void setDomilicio(DomicilioEntity domilicio) {
		this.domilicio = domilicio;
	}
	
	public int calcularMinutos() {
		int result = 0;
		if (!this.lista_detallePedido.isEmpty()) {
			for (DetallePedidoEntity p : this.lista_detallePedido) {
				if (!p.isEsInsumo()) {
					result += p.getArticuloManufacturado().getTiempo_estimado_manuf() * p.getCantidad();
				}
			}
			this.minTotalsinDelivery = result;
			if(this.tipo_Envio) {
				result += 10;
			}
		}
		return result;
	}

	public Date calcularHora_estimada_fin(List<PedidoEntity> lista, int cantcocineros) {
		int minuto = this.calcularMinutos();
		int minutoPendientes = this.calcularMinutosCocina(lista, cantcocineros);
		minuto += minutoPendientes;
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(this.fechaRealizacion);
		calendar.add(Calendar.MINUTE, minuto);
		return calendar.getTime();
	}
	
	public int calcularMinutosCocina(List<PedidoEntity> lista, int cantcocineros) {
		int result = 0;
		for (PedidoEntity p : lista) {
			result = result + p.minTotalsinDelivery;
		}
		result /= cantcocineros;
		return result;
	}

	public PedidoEntity agregarMinRetraso() {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(this.hora_estimada_fin);
		calendar.add(Calendar.MINUTE, 10);
		this.setHora_estimada_fin(calendar.getTime());
		return this;
	}

	public PedidoEntity descontarStock() {
		for (DetallePedidoEntity p : this.lista_detallePedido) {
			p.descontarStock();
		}
		return this;
	}
	
	public boolean stockSuficiente() {
		boolean resultado = true;
		for (DetallePedidoEntity p : this.lista_detallePedido) {
			if(!p.stockSuficiente()) {
				resultado=false;
				break;
			}
		}
		return resultado;
	}

	public int getMinTotalsinDelivery() {
		return minTotalsinDelivery;
	}

	public void setMinTotalsinDelivery(int minTotalsinDelivery) {
		this.minTotalsinDelivery = minTotalsinDelivery;
	}

}
