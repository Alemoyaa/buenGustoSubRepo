package com.utn.app.buenGusto.configuracionGeneral;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.utn.app.buenGusto.common.CommonEntity;

@Entity
@Table(name = "configuracion_general")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ConfiguracionGeneralEntity extends CommonEntity implements Serializable {

	private static final long serialVersionUID = -3884289039891364857L;

	@NotEmpty
	private int cantidadCocineros;

	public int getCantidadCocineros() {
		return cantidadCocineros;
	}

	public void setCantidadCocineros(int cantidadCocineros) {
		this.cantidadCocineros = cantidadCocineros;
	}

}
