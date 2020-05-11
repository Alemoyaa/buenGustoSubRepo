package com.utn.app.buenGusto.categoriaAI;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaAIRepository extends JpaRepository<CategoriaAIEntity, Integer>{

}
