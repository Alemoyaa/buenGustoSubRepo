package com.utn.app.buenGusto.domicilio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DomicilioRepository extends JpaRepository<DomicilioEntity, Long> {
}
