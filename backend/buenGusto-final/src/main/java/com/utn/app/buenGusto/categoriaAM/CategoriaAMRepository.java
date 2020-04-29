package com.utn.app.buenGusto.categoriaAM;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaAMRepository extends JpaRepository<CategoriaAMEntity, Long>{

}
