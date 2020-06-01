package com.utn.app.buenGusto.historicoRol;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoricoRolRepository extends JpaRepository<HistoricoRolEntity, Long>{

}
