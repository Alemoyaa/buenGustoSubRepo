package com.utn.app.buenGusto.detalleReceta;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecetaDetalleRepository extends JpaRepository<RecetaDetalleEntity, Integer>{

}
