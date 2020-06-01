package com.utn.app.buenGusto.personaCocinero;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaCocineroRepository extends JpaRepository<PersonaCocineroEntity, Long>{

}
