package com.utn.app.buenGusto.rol;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface RolRepository extends JpaRepository<RolEntity, Long> {
	
	@Query("SELECT c FROM RolEntity c WHERE c.habilitado = ?1")
	public List<RolEntity> findAllByHabilitado(boolean hab); 

}
