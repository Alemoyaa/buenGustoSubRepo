package com.utn.app.buenGusto.rubroArticulo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface rubroArticuloRepository extends JpaRepository<rubroArticuloEntity, Long>{}
