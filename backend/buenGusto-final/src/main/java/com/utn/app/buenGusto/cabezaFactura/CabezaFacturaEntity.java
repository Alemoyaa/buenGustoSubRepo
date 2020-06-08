package com.utn.app.buenGusto.cabezaFactura;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.utn.app.buenGusto.datosEmpresa.DatosEmpresaEntity;
import com.utn.app.buenGusto.detalleFactura.DetalleFacturaEntity;
import com.utn.app.buenGusto.formaPago.FormaPagoEntity;

@Entity
@Table(name = "cabeza_factura")
public class CabezaFacturaEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -824096367323433145L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;

	private String tipoFactura;
	private double precioTotal;
	private Date fecha;
	private int nroFactura;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "cabeza_factura_id")
	private List<DetalleFacturaEntity> detalleFactura = new ArrayList<DetalleFacturaEntity>();

	@ManyToOne(optional = false)
	@JoinColumn(name = "forma_pago_id")
	private FormaPagoEntity formaPago;

	@ManyToOne(optional = false)
	@JoinColumn(name = "datos_empresa_id")
	private DatosEmpresaEntity datosEmpresaID;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTipoFactura() {
		return tipoFactura;
	}

	public void setTipoFactura(String tipoFactura) {
		this.tipoFactura = tipoFactura;
	}

	public double getPrecioTotal() {
		return precioTotal;
	}

	public void setPrecioTotal(double precioTotal) {
		this.precioTotal = precioTotal;
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

	public List<DetalleFacturaEntity> getDetalleFactura() {
		return detalleFactura;
	}

	public void setDetalleFactura(List<DetalleFacturaEntity> detalleFactura) {
		this.detalleFactura = detalleFactura;
	}

	public FormaPagoEntity getFormaPago() {
		return formaPago;
	}

	public void setFormaPago(FormaPagoEntity formaPago) {
		this.formaPago = formaPago;
	}

	public DatosEmpresaEntity getDatosEmpresaID() {
		return datosEmpresaID;
	}

	public void setDatosEmpresaID(DatosEmpresaEntity datosEmpresaID) {
		this.datosEmpresaID = datosEmpresaID;
	}

}
