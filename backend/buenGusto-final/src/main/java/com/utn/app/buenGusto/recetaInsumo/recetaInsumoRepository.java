package com.utn.app.buenGusto.recetaInsumo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface recetaInsumoRepository extends JpaRepository<recetaInsumoEntity, Long>{} 