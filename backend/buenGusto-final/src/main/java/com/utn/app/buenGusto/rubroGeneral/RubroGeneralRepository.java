package com.utn.app.buenGusto.rubroGeneral;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface RubroGeneralRepository extends JpaRepository<RubroGeneralEntity, Long> {
	
	@Query("SELECT c FROM RubroGeneralEntity c WHERE c.habilitado = ?1")
	public List<RubroGeneralEntity> findAllByHabilitado(boolean hab); 

}
