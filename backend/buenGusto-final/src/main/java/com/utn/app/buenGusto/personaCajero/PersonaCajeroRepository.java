package com.utn.app.buenGusto.personaCajero;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaCajeroRepository extends JpaRepository<PersonaCajeroEntity, Long>{

}
