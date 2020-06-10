package com.utn.app.buenGusto.personaCliente;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaClienteRepository extends JpaRepository<PersonaClienteEntity, Long>{

}
