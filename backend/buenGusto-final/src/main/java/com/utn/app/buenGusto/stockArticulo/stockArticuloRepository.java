package com.utn.app.buenGusto.stockArticulo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface stockArticuloRepository extends JpaRepository<stockArticuloEntity, Long>{}