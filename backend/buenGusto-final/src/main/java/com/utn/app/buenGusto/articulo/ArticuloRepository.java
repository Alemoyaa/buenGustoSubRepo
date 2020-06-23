package com.utn.app.buenGusto.articulo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticuloRepository extends JpaRepository<ArticuloEntity, Long> {

}
