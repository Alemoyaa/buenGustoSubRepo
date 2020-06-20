package com.utn.app.buenGusto.historicoPrecioVenta;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoricoPrecioVentaRepository extends JpaRepository<HistoricoPrecioVentaEntity, Long> {
	
	
}
