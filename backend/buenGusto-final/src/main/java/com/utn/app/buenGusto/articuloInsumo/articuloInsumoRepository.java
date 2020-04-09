package com.utn.app.buenGusto.articuloInsumo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface articuloInsumoRepository extends JpaRepository<articuloInsumoEntity, Long>{}
