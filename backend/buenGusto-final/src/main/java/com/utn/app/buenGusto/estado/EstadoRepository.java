package com.utn.app.buenGusto.estado;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstadoRepository extends JpaRepository<EstadoEntity, Long>{

}
