package com.utn.app.buenGusto.cliente;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
 

@Repository
public interface ClienteRepository extends JpaRepository<ClienteEntity, Long> {

	@Query("SELECT c FROM ClienteEntity c WHERE c.usuario.uid_firebase = ?1")
	public ClienteEntity findByUidFirebase(String uid);
	
}
