package com.utn.app.buenGusto.personaRepartidor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepartidorRepository extends JpaRepository<PersonaRepartidorEntity, Long>{

}
