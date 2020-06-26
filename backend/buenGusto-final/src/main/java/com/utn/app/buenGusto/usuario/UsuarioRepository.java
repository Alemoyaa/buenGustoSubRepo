package com.utn.app.buenGusto.usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;  

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long> {


	@Query("SELECT u FROM UsuarioEntity u WHERE u.email = ?1")
	public UsuarioEntity findByEmail(String email); 
	
}
