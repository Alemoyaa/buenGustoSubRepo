package com.utn.app.buenGusto.provincia;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProvinciaRepository extends JpaRepository<ProvinciaEntity, Long> {

}
