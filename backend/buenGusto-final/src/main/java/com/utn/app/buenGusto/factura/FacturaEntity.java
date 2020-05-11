package com.utn.app.buenGusto.factura;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import com.utn.app.buenGusto.formaPago.FormaPagoEntity;
import com.utn.app.buenGusto.pedido.PedidoEntity;

@Entity
@Table(name = "factura")
public class FacturaEntity implements Serializable {

	private static final long serialVersionUID = -8356649232468048872L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private int nro_factura;

	@Temporal(TemporalType.TIMESTAMP)
	private Date fecha;
	
	private double total;
 
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "formapago_id",nullable = false)
	private FormaPagoEntity formapago;
	
	@OneToOne(cascade = CascadeType.REMOVE)
	@JoinColumn(name = "pedido_id",nullable = false)
	private PedidoEntity pedido;
	
	@PrePersist
	public void prePersist() {
		this.fecha = new Date();
	}

	public int getNro_factura() {
		return nro_factura;
	}

	public void setNro_factura(int nro_factura) {
		this.nro_factura = nro_factura;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public FormaPagoEntity getFormapago() {
		return formapago;
	}

	public void setFormapago(FormaPagoEntity formapago) {
		this.formapago = formapago;
	}

	public PedidoEntity getPedido() {
		return pedido;
	}

	public void setPedido(PedidoEntity pedido) {
		this.pedido = pedido;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
}
