package com.utn.app.buenGusto.factura;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;
import com.utn.app.buenGusto.datosEmpresa.DatosEmpresaEntity;
import com.utn.app.buenGusto.detalleFactura.DetalleFacturaEntity;
import com.utn.app.buenGusto.detallePedido.DetallePedidoEntity;
import com.utn.app.buenGusto.pedido.PedidoEntity;

@Entity
@Table(name = "factura")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class FacturaEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -824096367323433145L;

	private Date fecha;
	private String formaPago;
	private int nroFactura;
	private String tipoFactura;

	@OneToOne(optional = true, cascade = CascadeType.ALL)
	@JoinColumn(name = "pedido_id")
	private PedidoEntity pedidofacturado;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "factura_id")
	private List<DetallePedidoEntity> detalleFactura = new ArrayList<DetallePedidoEntity>();

	@ManyToOne(optional = false)
	@JoinColumn(name = "datos_empresa_id")
	private DatosEmpresaEntity datosEmpresaID;

	public String getTipoFactura() {
		return tipoFactura;
	}

	public void setTipoFactura(String tipoFactura) {
		this.tipoFactura = tipoFactura;
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


	public List<DetallePedidoEntity> getDetalleFactura() {
		return detalleFactura;
	}

	public void setDetalleFactura(List<DetallePedidoEntity> detalleFactura) {
		//this.detalleFactura = detalleFactura;
		this.detalleFactura = this.pedidofacturado.getLista_detallePedido();
	}

	public DatosEmpresaEntity getDatosEmpresaID() {
		return datosEmpresaID;
	}

	public void setDatosEmpresaID(DatosEmpresaEntity datosEmpresaID) {
		this.datosEmpresaID = datosEmpresaID;
	}

	public String getFormaPago() {
		return formaPago;
	}

	public void setFormaPago(String formaPago) {
		this.formaPago = formaPago;
	}

	public PedidoEntity getPedidofacturado() {
		return pedidofacturado;
	}

	public void setPedidofacturado(PedidoEntity pedidofacturado) {
		this.pedidofacturado = pedidofacturado;
	}

}
