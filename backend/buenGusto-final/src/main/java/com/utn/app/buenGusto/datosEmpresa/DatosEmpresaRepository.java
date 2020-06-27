package com.utn.app.buenGusto.datosEmpresa;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface DatosEmpresaRepository extends JpaRepository<DatosEmpresaEntity, Long> {
	
	@Query("SELECT c FROM DatosEmpresaEntity c WHERE c.habilitado = ?1")
	public List<DatosEmpresaEntity> findAllByHabilitado(boolean hab); 

}
