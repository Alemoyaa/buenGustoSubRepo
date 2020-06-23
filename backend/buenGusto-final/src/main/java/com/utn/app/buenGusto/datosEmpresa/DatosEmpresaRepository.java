package com.utn.app.buenGusto.datosEmpresa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DatosEmpresaRepository extends JpaRepository<DatosEmpresaEntity, Long> {

}
