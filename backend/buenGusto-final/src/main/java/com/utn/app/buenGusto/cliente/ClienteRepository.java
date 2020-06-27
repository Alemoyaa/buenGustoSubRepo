package com.utn.app.buenGusto.cliente;
  
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
  

@Repository
public interface ClienteRepository extends JpaRepository<ClienteEntity, Long> {
	 
	@Query("SELECT c FROM ClienteEntity c WHERE c.nombre LIKE :nombre% AND c.apellido LIKE :apellido%")
	public List<ClienteEntity> findByName(String nombre, String apellido);
	 
	@Query("SELECT c FROM ClienteEntity c WHERE c.usuario.uid_firebase = ?1")
	public ClienteEntity findByUidFirebase(String uid); 
	
	@Query("SELECT c FROM ClienteEntity c WHERE c.habilitado = ?1")
	public List<ClienteEntity> findAllByHabilitado(boolean hab); 
	 
}
