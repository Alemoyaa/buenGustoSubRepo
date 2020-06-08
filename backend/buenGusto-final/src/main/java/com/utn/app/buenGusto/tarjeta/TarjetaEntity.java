package com.utn.app.buenGusto.tarjeta;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.utn.app.buenGusto.formaPago.FormaPagoEntity;

@Entity
@Table(name = "tarjeta")
@javax.persistence.PrimaryKeyJoinColumn(name = "forma_pago_tarjeta_id")
public class TarjetaEntity extends FormaPagoEntity implements Serializable {

	private static final long serialVersionUID = 823453454320078362L;

	private String nombre_titular_tarjeta;
	private int nro_tarjeta;

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
}
