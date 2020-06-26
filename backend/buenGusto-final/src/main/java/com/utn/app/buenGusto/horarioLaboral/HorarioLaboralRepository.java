package com.utn.app.buenGusto.horarioLaboral;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HorarioLaboralRepository extends JpaRepository<HorarioLaboralEntity, Long> {

}