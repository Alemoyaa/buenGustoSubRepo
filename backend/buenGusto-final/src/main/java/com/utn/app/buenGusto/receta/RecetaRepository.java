package com.utn.app.buenGusto.receta;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecetaRepository extends JpaRepository<RecetaEntity, Long>{

}
