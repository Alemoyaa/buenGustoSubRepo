package com.utn.app.buenGusto.localidad;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocalidadRepository extends JpaRepository<LocalidadEntity, Long> {

}
