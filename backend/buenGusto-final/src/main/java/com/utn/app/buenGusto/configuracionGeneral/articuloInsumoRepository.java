package com.utn.app.buenGusto.configuracionGeneral;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface articuloInsumoRepository extends JpaRepository<articuloInsumoEntity, Long>{

}
