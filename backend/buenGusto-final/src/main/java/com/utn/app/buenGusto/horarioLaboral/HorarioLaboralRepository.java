package com.utn.app.buenGusto.horarioLaboral;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface HorarioLaboralRepository extends JpaRepository<HorarioLaboralEntity, Long> {
	
	@Query("SELECT c FROM HorarioLaboralEntity c WHERE c.habilitado = ?1")
	public List<HorarioLaboralEntity> findAllByHabilitado(boolean hab); 

	
	@Query("SELECT c FROM HorarioLaboralEntity c WHERE c.habilitado = ?1 AND c.nombre_dia = ?2")
	public List<HorarioLaboralEntity> findAllHabwithName(boolean hab, String nombre); 
	
}