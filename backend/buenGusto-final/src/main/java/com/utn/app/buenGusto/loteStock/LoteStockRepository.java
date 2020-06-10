package com.utn.app.buenGusto.loteStock;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoteStockRepository extends JpaRepository<LoteStockEntity, Long>{}