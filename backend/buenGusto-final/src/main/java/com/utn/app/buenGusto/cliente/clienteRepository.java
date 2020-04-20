package com.utn.app.buenGusto.cliente;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface clienteRepository extends JpaRepository<clienteEntity, Long> {

	@Query("SELECT c FROM clienteEntity c WHERE c.uidFirebase = ?1")
	public clienteEntity findByUidFirebase(String uid);

}
