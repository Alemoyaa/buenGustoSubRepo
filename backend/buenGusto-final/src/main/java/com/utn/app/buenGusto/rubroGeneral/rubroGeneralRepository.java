package com.utn.app.buenGusto.rubroGeneral;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface rubroGeneralRepository extends JpaRepository<rubroGeneralEntity, Long>{}
