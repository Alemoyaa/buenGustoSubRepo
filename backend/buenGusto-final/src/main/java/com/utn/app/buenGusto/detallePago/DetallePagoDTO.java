package com.utn.app.buenGusto.detallePago;

import com.utn.app.buenGusto.common.CommonDTO;
import com.utn.app.buenGusto.factura.FacturaEntity;

public class DetallePagoDTO extends CommonDTO {

	private static final long serialVersionUID = 1L;

	private String nombre_titular_tarjeta;
	private int nro_tarjeta;
	private FacturaEntity factura;
	
	public String getNombre_titular_tarjeta() {
		return nombre_titular_tarjeta;
	}
	public void setNombre_titular_tarjeta(String nombre_titular_tarjeta) {
		this.nombre_titular_tarjeta = nombre_titular_tarjeta;
	}
	public int getNro_tarjeta() {
		return nro_tarjeta;
	}
	public void setNro_tarjeta(int nro_tarjeta) {
		this.nro_tarjeta = nro_tarjeta;
	}
	public FacturaEntity getFactura() {
		return factura;
	}
	public void setFactura(FacturaEntity factura) {
		this.factura = factura;
	}
	
}
