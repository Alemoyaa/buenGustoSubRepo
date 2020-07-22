package com.utn.app.buenGusto.factura;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.datosEmpresa.DatosEmpresaEntity;
import com.utn.app.buenGusto.detallePedido.DetallePedidoEntity;
import com.utn.app.buenGusto.pedido.PedidoEntity;

@Entity
@Table(name = "factura")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class FacturaEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -824096367323433145L;

	private Date fecha;
	private int nroFactura;
	private double montoDescuento;
	private double totalFactura;
	private String formaPago;
	private String nroTarjeta; 
	private String tipoFactura;

	@Transient
	private List<DetallePedidoEntity> detalleFactura = new ArrayList<DetallePedidoEntity>();

	@OneToOne(optional = true, cascade = CascadeType.ALL)
	@JoinColumn(name = "pedido_id")
	private PedidoEntity pedidofacturado;

	@ManyToOne(optional = true)
	@JoinColumn(name = "datos_empresa_id")
	private DatosEmpresaEntity datosEmpresaID;
	
	public double calcularTotalFactura() {
		double resultado = 0.0d;
		if(this.formaPago == "Contado") {
			resultado = this.pedidofacturado.getTotalPedido() - (this.pedidofacturado.getTotalPedido()/this.montoDescuento);
		}else{
			resultado = this.pedidofacturado.getTotalPedido();
		}
		return resultado;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public int getNroFactura() {
		return nroFactura;
	}

	public void setNroFactura(int nroFactura) {
		this.nroFactura = nroFactura;
	}

	public double getMontoDescuento() {
		return montoDescuento;
	}

	public void setMontoDescuento(double montoDescuento) {
		this.montoDescuento = montoDescuento;
	}

	public double getTotalFactura() {
		return totalFactura;
	}

	public void setTotalFactura(double totalFactura) {
		this.totalFactura = totalFactura;
	}

	public String getFormaPago() {
		return formaPago;
	}

	public void setFormaPago(String formaPago) {
		this.formaPago = formaPago;
	}

	public String getNroTarjeta() {
		return nroTarjeta;
	}

	public void setNroTarjeta(String nroTarjeta) {
		this.nroTarjeta = nroTarjeta;
	}

	public String getTipoFactura() {
		return tipoFactura;
	}

	public void setTipoFactura(String tipoFactura) {
		this.tipoFactura = tipoFactura;
	}

	public List<DetallePedidoEntity> getDetalleFactura() {
		return this.getPedidofacturado().getLista_detallePedido();
	}

	public void setDetalleFactura(List<DetallePedidoEntity> detalleFactura) {
		this.detalleFactura = detalleFactura;
	}

	public PedidoEntity getPedidofacturado() {
		return pedidofacturado;
	}

	public void setPedidofacturado(PedidoEntity pedidofacturado) {
		this.pedidofacturado = pedidofacturado;
	}

	public DatosEmpresaEntity getDatosEmpresaID() {
		return datosEmpresaID;
	}

	public void setDatosEmpresaID(DatosEmpresaEntity datosEmpresaID) {
		this.datosEmpresaID = datosEmpresaID;
	}

}
