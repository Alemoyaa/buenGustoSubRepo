package com.utn.app.buenGusto.historicoEstado;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface historicoEstadoRepository extends JpaRepository<historicoEstadoEntity, Long>{

}
